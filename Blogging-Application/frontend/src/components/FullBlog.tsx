import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-screen-xl px-4 md:px-10 pt-8 md:pt-12 gap-8">
          <div className="lg:col-span-8">
            <div className="text-3xl md:text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2 md:pt-4">
              Posted on 2nd July 2021
            </div>
            <div className="pt-2 md:pt-4">
              {blog.content}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="text-lg md:text-xl font-bold">
              Author
            </div>
            <div className="flex pt-2">
              <div className="flex flex-col justify-center pr-2">
                <Avatar size={2} name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-1 md:pt-2 text-slate-500">
                  Blogs are the best way to share your thoughts with the world.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
