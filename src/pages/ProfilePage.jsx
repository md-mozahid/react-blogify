import { useEffect } from "react";
import { localhostApi } from "../api";
import MyPost from "../components/profile/MyPost";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { serverApi } = useApi();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await serverApi.get(
          `${localhostApi}/profile/${auth?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, [serverApi, dispatch, auth?.user?.id]);

  if (state?.loading) {
    return <div className="">Fetching your profile data...</div>;
  }

  return (
    <>
      <ProfileInfo />
      <MyPost />
    </>
  );
}
