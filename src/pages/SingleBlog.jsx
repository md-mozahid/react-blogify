import { useEffect } from "react";
import { serverApi } from "../api";
import BlogDetails from "../components/blog/singleBlog/BlogDetails";
import { useSingleBlog } from "../hooks";
import { actions } from "../actions";

export default function SingleBlog() {
  const { state, dispatch, blogId } = useSingleBlog();
  const blog = state?.blog;

  useEffect(() => {
    dispatch({
      type: actions.blog.DATA_FETCHING,
    });

    const fetchSingleBlog = async () => {
      try {
        const response = await serverApi.get(`/blogs/${blogId}`);
        if (response.status === 200) {
          dispatch({
            type: actions.blog.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.blog.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchSingleBlog();
  }, [blogId, dispatch]);

  return (
    <>
      <BlogDetails blog={blog} />
    </>
  );
}
