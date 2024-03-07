import { useState } from 'react'
import { CheckIcon, EditIcon } from '../../constant/images'
import { useApi } from '../../hooks/useApi'
import { useProfile } from '../../hooks/useProfile'
import { ProfileActions } from "../../reducers/profileReducer/ProfileActions";

export default function Bio() {
  const { state, dispatch } = useProfile()
  const { serverApi } = useApi()

  const [bio, setBio] = useState(state?.user?.bio)
  const [editMode, setEditMode] = useState(false)

  const handleBioEdit = async () => {
    dispatch({ type: ProfileActions.profile.DATA_FETCHING })

    try {
      const response = await serverApi.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      )

      if (response.status === 200) {
        dispatch({
          type: ProfileActions.profile.USER_DATA_EDITED,
          data: response.data,
        })
      }
      setEditMode(false)
    } catch (err) {
      dispatch({
        type: ProfileActions.profile.DATA_FETCH_ERROR,
        error: err.message,
      })
    }
  }

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md'
            value={bio}
            rows={4}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>
      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}>
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBioEdit}>
          <img src={CheckIcon} alt="Check" />
        </button>
      )}
    </div>
  )
}
