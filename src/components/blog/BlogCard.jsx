import { localhostApi } from '../../api'
import { useAuth } from '../../hooks'
import BlogAuthorInfo from './BlogAuthorInfo'
import BlogHeader from './BlogHeader'

export default function BlogCard({ blog }) {
  const { auth } = useAuth()
  // console.log(auth)
  // console.log(blog);
  return (
    <>
      <div className="my-6 space-y-4">
        <div className="blog-card relative">
          {blog?.thumbnail ? (
            <img
              className="blog-thumb"
              src={`${localhostApi}/uploads/blog/${blog?.thumbnail}`}
              alt="thumbnail"
            />
          ) : null}

          <div className="mt-2">
            <h3 className="text-slate-300 text-xl lg:text-2xl">{blog.title}</h3>
            <p className="mb-6 text-base text-slate-500 mt-1">{blog.content}</p>
            <BlogAuthorInfo blog={blog} />
            {/* yet not fixed */}
            {auth?.user && <BlogHeader />}
          </div>
        </div>
      </div>
    </>
  )
}
