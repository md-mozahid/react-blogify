import { useNavigate } from 'react-router-dom'
import { localhostApi } from '../../api'
import { useAuth, useSingleBlog } from '../../hooks'
import BlogAuthorInfo from './BlogAuthorInfo'
import BlogHeader from './BlogHeader'

export default function BlogCard({ blog }) {
  const { auth } = useAuth()
  const { setBlogId } = useSingleBlog()
  const navigate = useNavigate()

  const handleClick = (blogId) => {
    setBlogId(blogId)
    navigate('/single-blog')
  }

  const showBlogAction = auth?.user?.id === blog?.author?.id
  return (
    <>
      <div className="my-6 space-y-4">
        <div
          className="blog-card relative"
          onClick={() => handleClick(blog?.id)}>
          {blog?.thumbnail ? (
            <img
              className="blog-thumb"
              src={`${localhostApi}/uploads/blog/${blog?.thumbnail}`}
              alt="thumbnail"
            />
          ) : null}

          <div className="mt-2">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              {blog?.title}
            </h3>
            <p className="mb-6 text-base text-slate-500 mt-1">
              {blog?.content}
            </p>
            <BlogAuthorInfo blog={blog} />
            {showBlogAction && <BlogHeader blog={blog} />}
          </div>
        </div>
      </div>
    </>
  )
}
