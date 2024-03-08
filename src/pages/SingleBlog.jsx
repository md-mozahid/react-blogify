import { useEffect, useState } from 'react'
import { localhostApi } from '../api'
import BlogDetails from '../components/singleBlog/BlogDetails'
import { useApi, useBlog } from '../hooks'

export default function SingleBlog() {
  const [getSingleBlog, setGetSingleBlog] = useState({})
  const { state } = useBlog()
  const { serverApi } = useApi()
  const blogs = state?.blogs

  console.log(getSingleBlog)

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await serverApi.get(
          `${localhostApi}/blogs/${state?.blogs?.id}`
        )
        if (response.status === 200) {
          setGetSingleBlog(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleBlog()
  }, [])

  return (
    <>
      <BlogDetails />
    </>
  )
}
