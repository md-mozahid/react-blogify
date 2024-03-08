import { useEffect } from 'react'
import { serverApi } from '../api'
import BlogDetails from '../components/blog/singleBlog/BlogDetails'
import { useSingleBlog } from '../hooks'
import { SingleBlogActions } from '../reducers/singleBlogReducer/SingleBlogActions'

export default function SingleBlog() {
  const { dispatch, blogId } = useSingleBlog()

  useEffect(() => {
    dispatch({
      type: SingleBlogActions.blog.DATA_FETCHING,
    })

    const fetchSingleBlog = async () => {
      try {
        const response = await serverApi.get(`/blogs/${blogId}`)
        if (response.status === 200) {
          dispatch({
            type: SingleBlogActions.blog.DATA_FETCHED,
            data: response.data,
          })
        }
      } catch (error) {
        console.error(error)
        dispatch({
          type: SingleBlogActions.blog.DATA_FETCH_ERROR,
          error: error.message,
        })
      }
    }

    fetchSingleBlog()
  }, [blogId, dispatch])

  return (
    <>
      <BlogDetails />
    </>
  )
}
