import { useState } from "react";
import {
  HeartIcon,
  HeartFilledIcon,
  LikeIcon,
  Comment,
  LikeFilledIcon,
} from "../../../constant/images";
import { useAuth } from "../../../hooks";
import { useApi } from "../../../hooks";
import { localhostApi } from "../../../api";

export default function FloatingActions({ blog }) {
  // console.log(blog);
  const { auth } = useAuth();
  const { serverApi } = useApi();
  const [isLike, setIsLike] = useState(blog?.likes?.includes(auth?.user?.id));
  const [isFavorite, setIsFavorite] = useState(false);

  // handle likes
  const handleLike = async () => {
    try {
      const response = await serverApi.patch(
        `${localhostApi}/blogs/${blog.id}/like`
      );
      if (response.status === 200) {
        setIsLike(true);
      }
    } catch (error) {
      console.error(error);
      setIsLike(false);
    }
  };

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={handleLike}>
          <img src={isLike ? LikeFilledIcon : LikeIcon} alt="like" />
          <span>{blog?.likes?.length ?? 0}</span>
        </li>
        <li onClick={() => setIsFavorite(!isFavorite)}>
          <img src={isFavorite ? HeartFilledIcon : HeartIcon} alt="favorite" />
        </li>
        <a href="#comments">
          <li>
            <img src={Comment} alt="Comments" />
            <span>{blog?.comments?.length ?? 0}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
