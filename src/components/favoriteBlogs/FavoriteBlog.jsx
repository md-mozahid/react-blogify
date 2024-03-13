import { Link } from 'react-router-dom'
import { useSingleBlog } from '../../hooks'

export default function FavoriteBlog({ favorite }) {
  const { setBlogId } = useSingleBlog()

  return (
    <>
      <li>
        <Link to="/single-blog" onClick={() => setBlogId(favorite?.id)}>
          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
            {favorite?.title}
          </h3>
        </Link>
        <div className="flex flex-row gap-1">
          {favorite?.tags?.split(',  ').map((tag) => (
            <p key={tag} className="text-slate-600 text-sm">
              {tag}
            </p>
          ))}
        </div>
      </li>
    </>
  )
}
