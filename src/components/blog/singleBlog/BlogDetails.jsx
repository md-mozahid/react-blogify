import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { localhostApi } from "../../../api";
import { useProfile } from "../../../hooks";
import { formateDate } from "../../../utils/getDate";
import BlogComment from "./BlogComment";

export default function BlogDetails({ blog }) {
  const { setAuthor } = useProfile();

  return (
    <main>
      <section>
        <div className="container text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">{blog?.title}</h1>
          <div className="flex justify-center items-center my-4 gap-4">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">{blog?.author?.firstName?.charAt(0)}</span>
              </div>
              <Link
                to="/profile"
                onClick={(e) => {
                  e.stopPropagation();
                  setAuthor(blog?.author?.id);
                }}
              >
                <h5 className="text-slate-500 text-sm">
                  {blog?.author?.firstName} {blog?.author?.lastName}
                </h5>
              </Link>
            </div>
            <span className="text-sm text-slate-700 dot">
              {formateDate(blog?.createdAt)}
            </span>
            <span className="text-sm text-slate-700 dot">
              {blog?.likes?.length ?? 0} Likes
            </span>
          </div>
          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src={`${localhostApi}/uploads/blog/${blog?.thumbnail}`}
            alt="thumbnail"
          />

          {/* <!-- Tags --> */}
          <ul className="tags">
            {blog?.tags?.split(", ").map((tag) => (
              <li key={tag}> {tag}</li>
            ))}
          </ul>

          <div
            className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog?.content),
            }}
          ></div>
        </div>
        <BlogComment blog={blog} />
      </section>
    </main>
  );
}
