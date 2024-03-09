import { useAuth } from '../../hooks'
import FavoriteBlog from './FavoriteBlog'

export default function FavoriteBlogs() {
  const { auth } = useAuth()

  // decide what to render
  let content = null
  if (!auth?.user?.favourites) content = <div>No favorite blogs..</div>
  if (auth?.user?.favourites)
    content = (
      <>
        {auth?.user?.favourites?.map((favorite) => (
          <FavoriteBlog key={favorite?.id} favorite={favorite} />
        ))}
      </>
    )

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favorites ❤️
      </h3>
      <ul className="space-y-5 my-5">{content}</ul>
    </div>
  )
}
