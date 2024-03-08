import { Link } from 'react-router-dom'
import { localhostApi } from '../../api'

export default function BlogAuthorInfo({ blog }) {
  const { avatar, firstName, lastName } = blog.author

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <div className="avater-img bg-indigo-600 text-white ">
          <img
            src={`${localhostApi}/uploads/avatar/${avatar}`}
            alt="avatar"
            className="rounded-full"
          />
        </div>

        <div>
          <Link to="/profile">
            <h5 className="text-slate-500 text-sm">
              {firstName} {lastName}
            </h5>
          </Link>
          <div className="flex items-center text-xs text-slate-700">
            <span>{blog.createAt}</span>
          </div>
        </div>
      </div>
      <div className="text-sm px-2 py-1 text-slate-700">
        <span>{blog.likes.length} Likes</span>
      </div>
    </div>
  )
}
