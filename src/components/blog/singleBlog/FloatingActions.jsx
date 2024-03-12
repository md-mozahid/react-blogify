import {
  HeartIcon,
  HeartFilledIcon,
  LikeIcon,
  CommentIcon,
  LikeFilledIcon,
} from "../../../constant/images";
import { useApi, useAuth, useSingleBlog } from "../../../hooks";
import { localhostApi } from "../../../api";
import { actions } from "../../../actions";
import { toast } from "react-toastify";

export default function FloatingActions({ blog }) {
  // console.log(blog);
  const { auth } = useAuth();
  const { serverApi } = useApi();
  const { dispatch } = useSingleBlog();

  const isLike = blog?.likes?.includes(auth?.user?.id);

  // handle likes
  const handleLike = async () => {
    if (auth?.authToken) {
      try {
        const response = await serverApi.post(
          `${localhostApi}/blogs/${blog?.id}/like`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.blog.BLOG_LIKED,
            data: response.data,
          });
          // setIsLike(true);
        }
      } catch (error) {
        console.error(error);
        // setIsLike(false);
      }
    } else {
      toast.warn("Need to login first...");
    }
  };

  // handle favorite
  const handleFavorite = () => {
    if (auth?.authToken) {
      try {
        const response = serverApi.patch(
          `${localhostApi}/blogs/${blog?.id}/favourite`
        );
        console.log(response.data);
        if (response.status === 200) {
          dispatch({
            type: actions.blog.BLOG_FAVORITE,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Need login for favorite!");
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={handleLike}>
          <img src={isLike ? LikeFilledIcon : LikeIcon} alt="like" />
          <span>{blog?.likes?.length ?? 0}</span>
        </li>
        <li onClick={handleFavorite}>
          <img
            src={blog?.isFavorite ? HeartFilledIcon : HeartIcon}
            alt="favorite"
          />
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="comments" />
            <span>{blog?.comments?.length ?? 0}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
