import { localhostApi } from '../../../api'
import { useSingleBlog } from '../../../hooks'
import BlogComment from './BlogComment'

export default function BlogDetails() {
  const { state } = useSingleBlog()
  // console.log(state)

  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{state?.blog?.title}</h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">
                {state?.blog?.author?.firstName.slice(0, 1)}
              </span>
            </div>
            <h5 className="text-slate-500 text-sm">
              {state?.blog?.author?.firstName} {state?.blog?.author?.lastName}
            </h5>
          </div>
          <span className="text-sm text-slate-700 dot">
            {state?.blog?.createdAt}
          </span>
          <span className="text-sm text-slate-700 dot">
            {state?.blog?.likes?.length ?? 0} Likes
          </span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`${localhostApi}/uploads/blog/${state?.blog?.thumbnail}`}
          alt="thumbnail"
        />

        {/* <!-- Tags --> */}
        <ul className="tags">
          {state?.blog?.tags?.split(', ').map((tag) => (
            <li key={tag}> {tag}</li>
          ))}
        </ul>

        {/* <!-- Content --> */}
        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {state?.blog?.content}
        </div>
      </div>
      <BlogComment state={state} />
    </section>
  )
}
