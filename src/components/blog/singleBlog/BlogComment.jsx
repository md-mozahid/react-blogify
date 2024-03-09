import { localhostApi } from "../../../api";
import { useAuth } from "../../../hooks";
import BlogCommentList from "./BlogCommentList";
import FloatingActions from "./FloatingActions";

export default function BlogComment({ blog }) {
  const { auth } = useAuth();

  return (
    <>
      <section id="comments">
        <div className="mx-auto w-full md:w-10/12 container">
          <h2 className="text-3xl font-bold my-8">
            Comments ({blog?.comments?.length ?? 0})
          </h2>
          <div className="flex items space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              <img
                className="rounded-full"
                src={`${localhostApi}/uploads/avatar/${auth?.user?.avatar}`}
                alt="avatar"
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Comment
                </button>
              </div>
            </div>
          </div>
          {blog?.comments?.map((comment) => (
            <BlogCommentList key={comment?.id} comment={comment} />
          ))}
          <FloatingActions blog={blog} />
        </div>
      </section>
    </>
  );
}
