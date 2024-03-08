import { Link, useNavigate } from 'react-router-dom'
import { useAuth, useSingleBlog } from '../../hooks'

export default function PopularBlog({ blogs }) {
  const { setBlogId } = useSingleBlog()
  const navigate = useNavigate()
  const { auth } = useAuth()

  // get single blog id
  const handleClick = (id) => {
    setBlogId(id)
    navigate('/single-blog')
  }

  // if user available, navigate to profile page
  // otherwise navigate to login page
  const authorProfile = (user) => {
    if (user) {
      navigate('/profile')
    } else {
      navigate('/login')
    }
  }

  // decide what to render
  let content = null
  if (blogs.length === 0) content = <div>No blogs found !</div>
  if (blogs.length > 0)
    content = blogs.map((blog) => (
      <ul key={blog.id} className="space-y-5 my-5">
        <li>
          <Link to="/single-blog">
            <h3
              className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
              onClick={() => handleClick(blog?.id)}>
              {blog?.title}
            </h3>
          </Link>
          <p
            className="text-slate-600 text-sm cursor-pointer"
            onClick={() => authorProfile(auth?.user)}>
            by
            {/* <Link to="/profile"> */}
            {blog?.author?.firstName} {blog.author?.lastName}
            {/* </Link> */}
            <span>·</span> {blog.likes?.length} Likes
          </p>
        </li>
      </ul>
    ))
  return <>{content}</>
}
