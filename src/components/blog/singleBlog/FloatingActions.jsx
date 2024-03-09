import { useState } from "react";
import {
  HeartIcon,
  HeartFilledIcon,
  LikeIcon,
  Comment,
  LikeFilledIcon,
} from "../../../constant/images";

export default function FloatingActions({ state }) {
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={() => setLike(!like)}>
          {like ? (
            <img src={LikeFilledIcon} alt="like-filled" />
          ) : (
            <img src={LikeIcon} alt="like" />
          )}
          <span>{state?.blog?.likes?.length ?? 0}</span>
        </li>

        <li onClick={() => setFavorite(!favorite)}>
          {favorite ? (
            <img src={HeartFilledIcon} alt="Favorite-filled" />
          ) : (
            <img src={HeartIcon} alt="Favorite" />
          )}
        </li>
        <a href="#comments">
          <li>
            <img src={Comment} alt="Comments" />
            <span>{state?.blog?.comments?.length ?? 0}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
