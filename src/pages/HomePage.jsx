import { useEffect, useState } from "react";
import BlogList from "../components/blog/BlogList";
import SideBar from "./SideBar";
import axios from "axios";
import { localhostApi } from "../api";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${localhostApi}/blogs`);
        if (response.status === 200) {
          setBlogs(response?.data?.blogs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div className="space-y-3 md:col-span-5">
                <BlogList blogs={blogs} />
              </div>
              <SideBar />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
