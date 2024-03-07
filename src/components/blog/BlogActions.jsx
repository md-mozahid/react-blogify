import { Comment, Heart, Like } from "../../constant/images";

export default function BlogActions() {
  return (
    <>
      <div className="floating-action">
        <ul className="floating-action-menus">
          <li>
            <img src={Like} alt="like" />
            <span>10</span>
          </li>

          <li>
            <img src={Heart} alt="Favorite" />
          </li>
          <a href="#comments">
            <li>
              <img src={Comment} alt="Comments" />
              <span>3</span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
