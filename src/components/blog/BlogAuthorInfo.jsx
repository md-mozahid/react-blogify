import { Link } from 'react-router-dom'
import { localhostApi } from '../../api'
import { useProfile } from '../../hooks'

export default function BlogAuthorInfo({ blog }) {
  const { setAuthor } = useProfile()

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <div className="avater-img bg-indigo-600 text-white ">
          <img
            src={`${localhostApi}/uploads/avatar/${blog?.author?.avatar}`}
            alt="avatar"
            className="rounded-full"
          />
        </div>

        <div>
          <h5 className="text-slate-500 text-sm">
            <Link
              to="/profile"
              onClick={(e) => {
                e.stopPropagation()
                setAuthor(blog?.author?.id)
              }}>
              {blog?.author?.firstName} {blog?.author?.lastName}
            </Link>
          </h5>
          <div className="flex items-center text-xs text-slate-700">
            <span>{blog?.createAt}</span>
          </div>
        </div>
      </div>
      <div className="text-sm px-2 py-1 text-slate-700">
        <span>{blog?.likes?.length ?? 0} Likes</span>
      </div>
    </div>
  )
}
