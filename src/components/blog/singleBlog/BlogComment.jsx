import { useState } from "react";
import { localhostApi } from "../../../api";
import { useApi, useAuth, useSingleBlog } from "../../../hooks";
import BlogCommentList from "./BlogCommentList";
import FloatingActions from "./FloatingActions";
import { actions } from "../../../actions";
import { toast } from "react-toastify";

export default function BlogComment({ blog }) {
  const [comments, setComments] = useState(blog?.comments);
  const { auth } = useAuth();
  const { serverApi } = useApi();
  const { dispatch } = useSingleBlog();
  const user = auth?.user;

  const handleAddComment = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.blog.DATA_FETCHING });

    if (auth?.authToken) {
      try {
        const response = await serverApi.post(
          `${localhostApi}/blogs/${blog?.id}/comment`,
          { content: comments }
        );
        if (response.status === 200) {
          dispatch({
            type: actions.blog.BLOG_COMMENTED,
            data: response.data,
          });
          setComments('')
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.blog.BLOG_COMMENTED_ERROR,
          error: error.message,
        });
      }
    } else {
      toast.warn("Please, need login for commenting!");
    }
  };

  return (
    <>
      <section id="comments">
        <div className="mx-auto w-full md:w-10/12 container">
          <h2 className="text-3xl font-bold my-8">
            Comments ({blog?.comments?.length ?? 0})
          </h2>

          <div className="flex items space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              {user ? (
                <img
                  className="rounded-full"
                  src={`${localhostApi}/uploads/avatar/${user?.avatar}`}
                  alt="avatar"
                />
              ) : (
                <span>Guest</span>
              )}
            </div>

            <form className="w-full" onSubmit={handleAddComment}>
              <textarea
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                  type="submit"
                >
                  Comment
                </button>
              </div>
            </form>
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
