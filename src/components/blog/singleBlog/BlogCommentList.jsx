import { localhostApi } from '../../../api'

export default function BlogCommentList({ comment }) {
  return (
    <>
      <div className="flex items-start space-x-4 my-8">
        <div className="avater-img bg-orange-600 text-white">
          {comment?.author?.avatar ? (
            <img
              className="rounded-full"
              src={`${localhostApi}/uploads/avatar/${comment?.author?.avatar}`}
              alt="avatar"
            />
          ) : (
            <span>{comment?.author?.firstName?.charAt(0)}</span>
          )}
        </div>
        <div className="w-full">
          <h5 className="text-slate -500 font-bold">
            {comment?.author?.firstName} {comment?.author?.lastName}
          </h5>
          <p className="text-slate-300">{comment?.content}</p>
        </div>
      </div>
    </>
  )
}
