import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>;
  }

  // Sort blogs by id in descending order (newest first)
  const sortedBlogs = blogs.sort((a, b) => b.id - a.id);

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {sortedBlogs.map(blog => (
            <BlogCard
              key={blog.id} // Adding a unique key is important for React
              id={blog.id}
              publishedDate ={ "2021-09-01" }
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
