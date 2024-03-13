import { useRef } from "react";
import { localhostApi } from "../../api";
import { EditIcon } from "../../constant/images";
import { useApi, useProfile } from "../../hooks";
import { actions } from "../../actions";

export default function ProfileImg({ isLoggedInUser, user }) {
  const { dispatch } = useProfile();
  const { serverApi } = useApi();
  const ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const updateProfileImage = async () => {
    const formData = new FormData();
    for (const file of ref.current.files) {
      formData.append("avatar", file);
    }

    try {
      const res = await serverApi.post(
        `${localhostApi}/profile/avatar`,
        formData
      );
      if (res.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: res.data,
        });
      }
    } catch (error) {
      console.error("Error in profile avatar change", error);
    }
  };

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      {user?.avatar ? (
        <div>
          <img
            className="rounded-full"
            src={`${localhostApi}/uploads/avatar/${user?.avatar}`}
            alt=""
          />
        </div>
      ) : (
        <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
          <span>{user?.firstName?.charAt(0)}</span>
        </div>
      )}
      {isLoggedInUser && (
        <form>
          <button
            className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
            onClick={handleClick}
          >
            <img src={EditIcon} alt="Edit" />
          </button>
          <input
            type="file"
            id="file"
            hidden
            ref={ref}
            onChange={updateProfileImage}
          />
        </form>
      )}
    </div>
  );
}
