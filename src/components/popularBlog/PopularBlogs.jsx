import { useEffect, useState } from 'react'
import { useApi, useSingleBlog } from '../../hooks'
import PopularBlog from './PopularBlog'

export default function PopularBlogs() {
  const [blogs, setBlogs] = useState([])
  const { serverApi } = useApi()
  const { blogId} = useSingleBlog()

  useEffect(() => {
    const fetchPopularBlogs = async () => {
      try {
        const res = await serverApi.get(`/blogs/popular`)
        if (res.status === 200) {
          setBlogs(res.data?.blogs)
        }
      } catch (error) {
        console.error("Error fetching popular blog!", error)
      }
    }

    fetchPopularBlogs()
  }, [serverApi, blogId])
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <PopularBlog blogs={blogs} />
    </div>
  )
}
