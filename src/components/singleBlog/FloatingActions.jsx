import { HeartIcon, LikeIcon, Comment } from "../../constant/images";

export default function FloatingActions() {

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li>
          <img src={LikeIcon} alt="like" />
          <span>10</span>
        </li>

        <li>
          {/* <!-- There is heart-filled.svg in the icons folder --> */}
          <img src={HeartIcon} alt="Favorite" />
        </li>
        <a href="#comments">
          <li>
            <img src={Comment} alt="Comments" />
            <span>3</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
