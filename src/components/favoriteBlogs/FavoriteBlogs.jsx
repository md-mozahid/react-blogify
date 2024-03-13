import useFavorite from '../../hooks/useFavorite'
import FavoriteBlog from './FavoriteBlog'

export default function FavoriteBlogs() {
  const { favoriteBlogs, error } = useFavorite()

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favorites ❤️
      </h3>
      <ul className="space-y-5 my-5">
        {favoriteBlogs.length === 0 ? (
          <p className="">You have no favorite blog!</p>
        ) : (
          favoriteBlogs.map((favorite) => (
            <FavoriteBlog key={favorite?.id} favorite={favorite} />
          ))
        )}
      </ul>
    </div>
  )
}
