import { useNavigate } from "react-router-dom";
import { localhostApi } from "../../api";
import { useSingleBlog } from "../../hooks";

export default function SearchContent({ blog, onClose }) {
  const { setBlogId } = useSingleBlog();
  const navigate = useNavigate();
  const handleClick = (id) => {
    setBlogId(id);
    onClose(false);
    navigate("/single-blog");
  };
  return (
    <div
      className="flex gap-6 py-2 cursor-pointer"
      onClick={() => handleClick(blog?.id)}
    >
      <img
        className="h-28 object-contain"
        src={`${localhostApi}/uploads/blog/${blog?.thumbnail}`}
        alt="thumbnail"
      />
      <div className="mt-2">
        <h3 className="text-slate-300 text-xl font-bold">{blog?.title}</h3>
        <p className="mb-6 text-sm text-slate-500 mt-1">{blog?.content}</p>
      </div>
    </div>
  );
}
