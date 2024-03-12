import { useReducer } from "react";
import { blogReducer, initialState } from "../reducers/BlogReducer";
import { BlogContext } from "../context";

export default function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}
