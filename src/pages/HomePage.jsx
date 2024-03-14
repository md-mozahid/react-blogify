import { useEffect, useRef, useState } from "react";
import { localhostApi } from "../api";
import BlogList from "../components/blog/BlogList";
import { useBlog } from "../hooks";
import SideBar from "./SideBar";
import { actions } from "../actions";
import axios from "axios";

export default function HomePage() {
  const [hasMore, setHasMore] = useState(true);
  const [blogPerPage, setBlogPerPage] = useState(4);
  const loaderRefId = useRef(null);
  const { state, dispatch } = useBlog();
  // console.log(state)

  useEffect(() => {
    dispatch({ type: actions.blogs.DATA_FETCHING });

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${localhostApi}/blogs?limit=${blogPerPage}&page=1`
        );
        if (response?.data?.blogs?.length < blogPerPage) {
          setHasMore(false);
        } else {
          setBlogPerPage((prev) => prev + 4);
        }

        dispatch({
          type: actions.blogs.DATA_FETCHED,
          data: response.data,
        });
      } catch (error) {
        dispatch({
          type: actions.blogs.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    const onIntersection = (items) => {
      const loaderRefId = items[0];
      if (loaderRefId.isIntersecting && hasMore) {
        fetchBlogs();
      }
    };

    const observer = new IntersectionObserver(onIntersection);
    if (observer && loaderRefId.current) {
      observer.observe(loaderRefId.current);

      // cleaner
      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, [dispatch, blogPerPage, hasMore]);

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
          {hasMore ? (
            <div ref={loaderRefId} className="text-center mt-5 text-2xl">
              Load More Blog....
            </div>
          ) : (
            <div className="p-4 text-center mt-5 text-2xl">
              There are no more blogs on the server.
            </div>
          )}
        </section>
      </main>
    </>
  );
}
