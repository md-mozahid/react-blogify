import FavoriteBlogs from "../components/favoriteBlogs/FavoriteBlogs";
import PopularBlogs from "../components/popularBlog/PopularBlogs";
import { useAuth } from "../hooks";

export default function SideBar() {
  const { auth } = useAuth();
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <PopularBlogs />
      {auth?.user && <FavoriteBlogs />}
    </div>
  );
}
