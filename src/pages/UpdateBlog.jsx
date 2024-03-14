import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { actions } from '../actions'
import { localhostApi } from '../api'
import Field from '../components/common/Field'
import { useApi, useBlog, useSingleBlog } from '../hooks'

export default function UpdateBlog() {
  const { dispatch } = useBlog(id)
  const { setBlogId } = useSingleBlog()
  const { serverApi } = useApi()
  const loaderRef = useRef(null)
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm()

  const handleImageUpload = (e) => {
    e.preventDefault()
    loaderRef.current.click()
  }

  // const handleChange = (e) => {
  //   if(e.target.files.length > 0) {
  //     const selectedFile = e.target.files[0]
  //   }
  // }

  const handleBlogSubmit = async (data) => {
    dispatch({ type: actions.blogs.DATA_FETCHING })
    reset()
    navigate('/single-blog')

    try {
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('tags', data.tags)
      formData.append('content', data.content)

      if (loaderRef.current && loaderRef.current.files.length > 0) {
        formData.append('thumbnail', loaderRef.current.files[0])
      }

      const response = await serverApi.post(`${localhostApi}/blogs`, formData)

      setBlogId(response?.data?.blog?.id)

      if (response.status === 201) {
        dispatch({ type: actions.blogs.DATA_CREATED, data: response.data })
      }
    } catch (error) {
      dispatch({
        type: actions.blogs.DATA_CREATED_ERROR,
        error: error.message,
      })
      setError('root.random', {
        type: 'random',
        message: `Something went wrong`,
      })
    }
  }

  return (
    <>
      <main>
        <section>
          <div className="container">
            <form
              className="createBlog"
              onSubmit={handleSubmit(handleBlogSubmit)}>
              <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
                <button
                  className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer"
                  onClick={handleImageUpload}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <p>Upload Your Image</p>
                </button>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="hidden"
                  // onChange={handleChange}
                  ref={loaderRef}
                />
              </div>
              <Field label="" error={errors.title}>
                <input
                  {...register('title', { required: 'Title is required!' })}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                />
              </Field>

              <Field label="" error={errors.tags}>
                <input
                  {...register('tags', { required: 'Tags is required' })}
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                />
              </Field>

              <Field label="" error={errors.content}>
                <textarea
                  {...register('content', { required: 'Content is required' })}
                  id="content"
                  name="content"
                  placeholder="Write your blog content"
                  rows="8"></textarea>
              </Field>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                Update Blog
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
