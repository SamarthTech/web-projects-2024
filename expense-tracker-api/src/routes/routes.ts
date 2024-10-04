import { Router } from "express";
import {jwt, zod, PrismaClient, bcrypt} from '../imports'
const router = Router()
const prisma = new PrismaClient()
const secret = process.env.JWT_SECRET;

const registerSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})
const loginSchema = zod.object({
    username: zod.string(),
    password: zod.string().min(6)
})

router.post("/signup", async (req, res): Promise<any>=>{
    const input = registerSchema.safeParse(req.body);

    if(!input.success){
        return res.status(400).send({
            message: "Bad Request",
            error: input.error.errors
        })
    }

    const {username, email, password} = input.data;
    const hashedPass : string = await bcrypt.hash(password, 10);
    const userExists = await prisma.user.findFirst({
        where: {
            OR:[
                {username: username},
                {email: email}
            ]
        }
    })
    if(userExists){
        // console.log(typeof(secret));
        return res.json({
            message: "User already Exists"
        })
    }
    const result =  await prisma.user.create({
        data:{
            username: username,
            password: hashedPass,
            email: email
        }
    })
    
    return res.status(201).json({
        message: "User Created"
    })

})
router.post("/signin", async (req, res): Promise<any>=>{
    const input = loginSchema.safeParse(req.body);
    if(!input.success) {
        return res.status(400).json({
            message: "Bad Request",
            error: input.error.errors
        })
    }
    const {username, password} = input.data;
    const result = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    if(!result){
        return res.status(401).send({
            message: "User not found"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, result.password)
    if(!isPasswordValid){
        return res.status(401).send({
            message: "Invalid Password"
        })
    }
    if (!secret) {
        return res.status(500).send({
            message: "JWT Secret not defined"
        });
    }
    const token = jwt.sign({ userId: result.id }, secret);
    return res.status(201).send({
        message: "Logged In",
        token: token
    });
})

export default router