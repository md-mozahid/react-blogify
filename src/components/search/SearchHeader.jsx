import { useEffect } from "react";
import { useBlog } from "../../hooks";
import { actions } from "../../actions";

export default function SearchHeader({ search, onSearch }) {
  const { dispatch } = useBlog();

  useEffect(() => {
    dispatch({
      type: actions.blogs.BLOG_SEARCH,
      data: search,
    });
  }, [dispatch, search]);

  return (
    <div>
      <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
        Search for Your Desire Blogs
      </h3>
      <input
        type="text"
        placeholder="Start Typing to Search"
        className="w-full bg-transparent p-2 text-base text-white outline-none border rounded-lg focus:ring focus:ring-indigo-600"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
