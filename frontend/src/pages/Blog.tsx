import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../comonents/FullBlog";
import { Spinner } from "../comonents/Spinner";

export const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({ id: id || "" });

  if (loading || !blog) {
    return (
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
