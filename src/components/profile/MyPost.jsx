import { useProfile } from "../../hooks/useProfile";
import BlogList from "../blog/BlogList";

export default function MyPost() {
  const { state } = useProfile();
  // console.log(state);
  const blogs = state?.blogs
  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <BlogList blogs={blogs} />
    </>
  );
}
