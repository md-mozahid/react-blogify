import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { actions } from "../actions";
import { localhostApi } from "../api";
import Field from "../components/common/Field";
import { useApi, useBlog, useGetBlog, useSingleBlog } from "../hooks";
import { toast } from "react-toastify";

export default function UpdateBlog() {
  const { state, dispatch } = useBlog();
  const { serverApi } = useApi();
  const loaderRef = useRef(null);
  const navigate = useNavigate();
  const { blogId } = useSingleBlog();
  const { blog } = useGetBlog(blogId);

  console.log(blogId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Set default form values from the blog object
  useEffect(() => {
    setValue("title", blog?.title || "");
    setValue("tags", blog?.tags || "");
    setValue("content", blog?.content || "");
  }, [blog, setValue]);

  const handleImageUpload = (e) => {
    e.preventDefault();
    loaderRef.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      console.log(selectedFile);
    }
  };

  const handleBlogSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("tags", data.tags);

    if (loaderRef.current && loaderRef.current.files.length > 0) {
      formData.append("thumbnail", loaderRef.current.files[0]);
    }
    console.log("ago", state);
    dispatch({ type: actions.blog.DATA_FETCHING });
    try {
      const response = await serverApi.patch(
        `${localhostApi}/blogs/${blogId}`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.blog.DATA_EDITED,
          data: response.data,
        });
        navigate(`/single-blog/${response?.data?.id}`);
        toast.success("Blog updated successfully!");
        console.log("then", state);
      }
    } catch (error) {
      toast.error("An error Occurred");
      dispatch({
        type: actions.blog.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <>
      <main>
        <section>
          <div className="container">
            <form
              className="createBlog"
              onSubmit={handleSubmit(handleBlogSubmit)}
            >
              <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
                <button
                  className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer"
                  onClick={handleImageUpload}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
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
                  onChange={handleChange}
                  ref={loaderRef}
                />
              </div>
              <Field label="" error={errors.title}>
                <input
                  {...register("title", { required: "Title is required!" })}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                />
              </Field>

              <Field label="" error={errors.tags}>
                <input
                  {...register("tags", { required: "Tags is required" })}
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                />
              </Field>

              <Field label="" error={errors.content}>
                <textarea
                  {...register("content", { required: "Content is required" })}
                  id="content"
                  name="content"
                  placeholder="Write your blog content"
                  rows="8"
                ></textarea>
              </Field>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Update Blog
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
