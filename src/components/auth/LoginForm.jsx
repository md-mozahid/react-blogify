import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { serverApi } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";
import { toast } from "react-toastify";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const loginFormSubmit = async (formData) => {
    try {
      const response = await serverApi.post("/auth/login", formData);
      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.accessToken;
          const refreshToken = token.refreshToken;
          setAuth({ user, authToken, refreshToken });
          navigate("/");
          toast.success("Login successful");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };

  return (
    <>
      {/* <!-- Login Form into a box center of the page --> */}
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(loginFormSubmit)}>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email ID is Required" })}
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              defaultValue="saadhasan@learnwithsumit.com"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              defaultValue="learnwithsumit123"
              type="password"
              id="password"
              name="password"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </Field>
          <p>{errors?.root?.random?.message}</p>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            Don`t have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
