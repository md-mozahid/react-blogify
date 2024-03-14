import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { localhostApi } from "../api";

export const useGetBlog = () => {
  const [blog, setBlog] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { serverApi } = useApi();

  useEffect(() => {
    setLoading(true);
    const fetchBlog = async (id) => {
      try {
        const res = await serverApi.get(`${localhostApi}/blogs/${id}`);
        if (res.status === 200) {
          setBlog(res.data);
          setLoading(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Blog not found!");
        } else {
          setError("An error occurred!", error.message);
        }
        setLoading(false);
      }
    };
    fetchBlog();
  }, [serverApi]);
  return { blog, error, loading };
};
