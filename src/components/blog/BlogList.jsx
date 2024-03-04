import SingleBlog from "./SingleBlog";
import BlogComments from "./BlogComments";
import BlogActions from "./BlogActions";

export default function BlogList() {
  return (
    <>
      <SingleBlog />
      <BlogComments />
      <BlogActions />
    </>
  );
}
