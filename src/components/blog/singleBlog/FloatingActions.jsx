import { useState } from "react";
import {
  HeartIcon,
  HeartFilledIcon,
  LikeIcon,
  Comment,
  LikeFilledIcon,
} from "../../../constant/images";

export default function FloatingActions({ blog }) {
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={() => setLike(!like)}>
          <img src={like ? LikeFilledIcon : LikeIcon} alt="like" />
          <span>{blog?.likes?.length ?? 0}</span>
        </li>
        <li onClick={() => setFavorite(!favorite)}>
          <img src={favorite ? HeartFilledIcon : HeartIcon} alt="favorite" />
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
