import { Link, useNavigate } from 'react-router-dom'
import { useProfile, useSingleBlog } from '../../hooks'

export default function PopularBlog({ blogs }) {
  const { setBlogId } = useSingleBlog()
  const navigate = useNavigate()
  const { setAuthor } = useProfile()

  // get single blog id
  const handleClick = (id) => {
    setBlogId(id)
    navigate('/single-blog')
  }

  // decide what to render
  let content = null
  if (blogs.length === 0) content = <div>No blogs found !</div>
  if (blogs.length > 0)
    content = blogs.map((blog) => (
      <ul key={blog.id} className="space-y-5 my-5">
        <li>
          <h3
            className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
            onClick={() => handleClick(blog?.id)}>
            {blog?.title}
          </h3>

          <p className="text-slate-600 text-sm cursor-pointer">
            <Link to="/profile" onClick={() => setAuthor(blog?.author?.id)}>
              by {blog?.author?.firstName} {blog.author?.lastName}
            </Link>
            <span>·</span> {blog.likes?.length ?? 0} Likes
          </p>
        </li>
      </ul>
    ))
  return <>{content}</>
}
