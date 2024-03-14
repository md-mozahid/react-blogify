import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../actions";
import { localhostApi } from "../../api";
import { DeleteIcon, EditIcon, ThreeDots } from "../../constant/images";
import { useApi, useBlog } from "../../hooks";

export default function BlogHeader({ blog }) {
  const [showAction, setShowAction] = useState(false);
  const { serverApi } = useApi();
  const { dispatch } = useBlog();
  const navigate = useNavigate();

  const handleDeleted = async (e) => {
    e.stopPropagation();
    try {
      const res = await serverApi.delete(`${localhostApi}/blogs/${blog?.id}`);
      if (res.status === 200) {
        dispatch({
          type: actions.blogs.BLOG_DELETED,
          data: res.id,
        });
        toast.success("Deleted successfully done!");
      }
    } catch (error) {
      toast.error(error.message);
      dispatch({
        type: actions.blog.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  const handleUpdated = (e) => {
    e.stopPropagation();
    navigate(`/update-blog`);
  };
  return (
    <div className="absolute right-2 top-2">
      <button
        onClick={(e) => {
          e.stopPropagation(), setShowAction(!showAction);
        }}
      >
        <img src={ThreeDots} alt="3dots of Action" />
      </button>

      {showAction && (
        <div className="action-modal-container">
          {/* <Link to={`/single-blog/${blog?.id}`}> */}
            <button
              className="action-menu-item hover:text-lwsGreen"
              onClick={handleUpdated}
            >
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
          {/* </Link> */}

          <button
            className="action-menu-item hover:text-red-500"
            onClick={handleDeleted}
          >
            <img src={DeleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
