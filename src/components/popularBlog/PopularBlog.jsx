import { Link } from 'react-router-dom'

export default function PopularBlog({ blogs }) {
  // decide what to render
  let content = null
  if (blogs.length === 0) content = <div>No blogs found !</div>
  if (blogs.length > 0)
    content = blogs.map((blog) => (
      <ul key={blog.id} className="space-y-5 my-5">
        <li>
          <Link to="/single-blog">
            <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
              {blog?.title}
            </h3>
          </Link>
          <p className="text-slate-600 text-sm">
            by
            <Link to="/profile">
              {blog?.author?.firstName} {blog.author?.lastName}
            </Link>
            <span>·</span> {blog.likes?.length} Likes
          </p>
        </li>
      </ul>
    ))
  return <>{content}</>
}
