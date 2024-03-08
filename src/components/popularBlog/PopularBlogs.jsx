import { useEffect, useState } from 'react'
import { useApi } from '../../hooks'
import PopularBlog from './PopularBlog'

export default function PopularBlogs() {
  const [blogs, setBlogs] = useState([])
  const { serverApi } = useApi()

  useEffect(() => {
    const fetchPopularBlogs = async () => {
      try {
        const res = await serverApi.get(`/blogs/popular`)
        if (res.status === 200) {
          setBlogs(res.data?.blogs)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchPopularBlogs()
  }, [serverApi])
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <PopularBlog blogs={blogs} />
    </div>
  )
}
