import { Appbar } from "../comonents/Appbar";
import { BlogCard } from "../comonents/BlogCard";
import { Skeleton } from "../comonents/Skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />

        <div className="flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymos"}
              title={blog.title}
              content={blog.content}
              publishedDate={"Dec 3, 2004"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
