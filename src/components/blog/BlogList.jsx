import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  // console.log(blogs)
  // decide what to render
  let content = null;
  if (blogs?.length === 0) content = <div className="text-center text-3xl">No blogs found !</div>;
  if (blogs?.length > 0) {
    content = blogs?.map((blog) => <BlogCard key={blog?.id} blog={blog} />);
  }

  return <>{content}</>;
}
