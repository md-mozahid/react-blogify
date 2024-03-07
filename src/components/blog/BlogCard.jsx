import { Link } from "react-router-dom";
import BlogAuthorInfo from "./BlogAuthorInfo";
import BlogHeader from "./BlogHeader";
import { localhostApi } from "../../api";

export default function BlogCard({ blog }) {
  console.log(blog);
  return (
    <>
      <Link to="/single-blog">
        <div className="my-6 space-y-4">
          <div className="blog-card relative">
            {blog?.thumbnail ? (
              <img
                className="blog-thumb"
                src={`${localhostApi}/uploads/blog/${
                  blog?.thumbnail
                }`}
                alt="thumbnail"
              />
            ) : null}

            <div className="mt-2">
              <h3 className="text-slate-300 text-xl lg:text-2xl">
                {blog.title}
              </h3>
              <p className="mb-6 text-base text-slate-500 mt-1">
                {blog.content}
              </p>
              <BlogAuthorInfo blog={blog} />
              <BlogHeader />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
