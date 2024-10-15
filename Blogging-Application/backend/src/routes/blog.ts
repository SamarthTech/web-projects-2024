import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";
import { CreateBlogInput, updateBlogInput } from "@nimitsodhani/medium";

export const blogRouter = new Hono<
{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
        
    } , 
    Variables :{
        userId : string ,
    }
}>(); 
blogRouter.use("/*" , async (c , next )=>{
  const authHeader = c.req.header("Authorization") || "";
  try {
  const user = await verify(authHeader , c.env.JWT_SECRET) ;
  if(user) {
    // @ts-ignore
    c.set("userId", user.id) ; 
     await next()  ; 
  }
  else {
    c.status(401) ;
    return c.json({message : 'Unauthorized'}) ;
  }
} catch(e) {
  c.status(401) ;
  return c.json({message : 'Unauthorized'}) ;
}

}) ; 

blogRouter.post('/', async (c) => {
  const authorId = c.get("userId") ;
  const body = await c.req.json()
  const { success } = CreateBlogInput.safeParse(body) ;
  if(!success) {
    c.status(411) ;
    return c.json({message : 'Invalid input'}) ;
  }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())

 const blog =  await prisma.blog.create({
    data :{
      title : body.title , 
      content : body.content ,
      authorId : Number(authorId) ,
    }
  })
    return c.json({
      id  : blog.id  ,  
    })
  })

  blogRouter.put('/',  async(c) => {
    const body = await c.req.json()
    const { success } = updateBlogInput.safeParse(body) ;
    if(!success) {
      c.status(411) ;
      return c.json({message : 'Invalid input'}) ;
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())

  const blog = await prisma.blog.update({
    where : {
      id : body.id , 
    } , 
    data :{
      title : body.title , 
      content : body.content ,
    }
  })

    return c.json({
      id  : blog.id  ,  
    })
  })


  // todo: add pagination ,  and zod 
  blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())
    try {
      const blogs = await prisma.blog.findMany({
        select: {
          content: true,
          title: true,
          id: true,
          author: {
            select: {
              name: true,
            }
          }
        }
      });
      return c.json({ blogs });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      c.status(500);
      return c.json({ message: 'Internal Server Error' });
    }
  });
  
  
  blogRouter.get('/:id',  async (c) => {

    const id = await c.req.param("id")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())
  try {
  const blog = await prisma.blog.findFirst({
    where : {
      id : Number(id) , 
    } ,
    select :{ 
      title: true  , 
      content : true , 
      id : true ,
      author :{
        select :{
          name : true , 
        }
      }
    } 
   
  })

    return c.json({
         blog  , 
    })
  }catch (e) 
  {
    c.status(411) ;
    return c.json({message : 'error while fetching blog'}) ;
  }
  })



 