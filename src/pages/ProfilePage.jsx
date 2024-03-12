import { useEffect } from 'react'
import { actions } from '../actions'
import { localhostApi } from '../api'
import MyPost from '../components/profile/MyPost'
import ProfileInfo from '../components/profile/ProfileInfo'
import { useApi } from '../hooks/useApi'
import { useProfile } from '../hooks/useProfile'

export default function ProfilePage() {
  const { state, dispatch, author } = useProfile()
  const { serverApi } = useApi()

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING })

    const fetchProfile = async () => {
      try {
        const response = await serverApi.get(
          `${localhostApi}/profile/${author}`
        )

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          })
        }
      } catch (error) {
        console.error(error)
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        })
      }
    }
    fetchProfile()
  }, [serverApi, dispatch, author])

  if (state?.loading) {
    return <div className="">Fetching your profile data...</div>
  }

  return (
    <>
      <ProfileInfo />
      <MyPost />
    </>
  )
}
