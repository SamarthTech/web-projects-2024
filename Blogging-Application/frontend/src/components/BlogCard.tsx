import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName : string  ; 
  title : string ;
  content : string   ; 
  publishedDate : string ; 
  id : number ;
}
export const BlogCard = ({
      authorName, 
      title,
      content,
      publishedDate, 
      id

} : BlogCardProps) => {
  return <Link to={`/blog/${id}`}> 
    <div className=" p-5 border-b border-slate-300 pb-4 max-w-screen-md w-screen
    cursor-pointer">
          <div className="flex ">
            <div className="flex justify-center flex-col">
            <Avatar name={authorName}/> 
            </div>
          
          <div className="font-extralight pl-2 ">
          {authorName} 
          </div>
          <div className=" flex justify-center flex-col pl-2">
            <Dot/> 
          </div>
          <div  className="pl-2 font-thin text-slate-500 "> 
          {publishedDate}
          </div>
          </div>
          <div className="font-bold text-xl pb-1 pt-1">
            {title}
          </div>
          <div className=" text-md font-thin"> 
            {content.slice(0,100) + "..."  }
          </div>
          <div className= "text-slate-500 text-sm font-thin pt-3 ">
          {`${Math.ceil(content.length / 100)} minute read`}
          </div>       
      </div>
    </Link>
  
}

 export function Dot () 
{
  return <div className="h-1 w-1 rounded-full bg-slate-800">

  </div>
}

export function Avatar({ name, size = 1 }: { name: string; size?: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
      style={{ width: `${size}rem`, height: `${size}rem` }} 
    >
      <span className="font-xs font-thin text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
