import { useNavigate } from 'react-router-dom'
import { localhostApi } from '../../api'
import { useAuth } from '../../hooks'

export default function BlogAuthorInfo({ blog }) {
  const { auth } = useAuth()
  const navigate = useNavigate()

  // if user available, navigate to profile page
  // otherwise navigate to login page
  const authorProfile = (user) => {
    if (user) {
      navigate('/profile')
    } else {
      navigate('/login')
    }
  }

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
          {/* <Link to="/profile"> */}
          <h5
            className="text-slate-500 text-sm"
            onClick={() => authorProfile(auth?.user)}>
            {blog?.author?.firstName} {blog?.author?.lastName}
          </h5>
          {/* </Link> */}
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
