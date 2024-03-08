import FavoriteBlogs from '../components/favoriteBlogs/FavoriteBlogs'
import PopularBlogs from '../components/popularBlog/PopularBlogs'

export default function SideBar() {
  return (
    <div className="md:col-span-2 h-full w-full space-y-5">
      <PopularBlogs />
      <FavoriteBlogs />
    </div>
  )
}
