import { useAuth } from "../../hooks";
import FavoriteBlog from "./FavoriteBlog";

export default function FavoriteBlogs() {
  const { auth } = useAuth();

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favorites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {auth?.user?.favourites?.map((fav) => (
          <FavoriteBlog key={fav?.id} favorite={fav} />
        ))}
      </ul>
    </div>
  );
}
