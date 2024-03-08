import { useEffect } from "react";
import BlogList from "../components/blog/BlogList";
import SideBar from "./SideBar";
import { localhostApi } from "../api";
import { BlogActions } from "../reducers/blogReducer/BlogActions";
import { useApi, useBlog } from "../hooks";

export default function HomePage() {
  const { state, dispatch } = useBlog();
  const { serverApi } = useApi();

  useEffect(() => {
    dispatch({ type: BlogActions.blogs.DATA_FETCHING });
    const fetchBlogs = async () => {
      try {
        const response = await serverApi.get(`${localhostApi}/blogs`);
        if (response.status === 200) {
          dispatch({
            type: BlogActions.blogs.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: BlogActions.blogs.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchBlogs();
  }, [serverApi, dispatch]);

  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div className="space-y-3 md:col-span-5">
                <BlogList blogs={state?.blogs} />
              </div>
              <SideBar />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
