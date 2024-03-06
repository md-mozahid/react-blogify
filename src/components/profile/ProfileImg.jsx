// import { EditIcon } from '../../constant/images'
// import { useAuth } from '../../hooks/useAuth'

import { useRef } from "react"
import { useApi } from "../../hooks/useApi"
import { useProfile } from "../../hooks/useProfile"
import { actions } from "../../reducers/Actions"
import { EditIcon } from "../../constant/images"

// export default function ProfileImg() {
//   const { auth } = useAuth()
//   return (
//     <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
//       <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
//         <span className="">{auth?.user?.firstName.slice(0, 1)}</span>
//       </div>

//       <button className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
//         <img src={EditIcon} alt="Edit" />
//       </button>
//     </div>
//   )
// }


export default function ProfileImg() {
   const { state, dispatch } = useProfile()
   const { serverApi } = useApi()
   const fileUploaderRef = useRef()

   const handleImageUpload = (event) => {
     event.preventDefault()

     fileUploaderRef.current.addEventListener('change', updateImageDisplay)
     fileUploaderRef.current.click()
   }

   const updateImageDisplay = async () => {
     try {
       const formData = new FormData()
       for (const file of fileUploaderRef.current.files) {
         formData.append('avatar', file)
       }

       const response = await serverApi.post(
         `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
           state?.user?.id
         }/avatar`,
         formData
       )
       if (response.status === 200) {
         dispatch({
           type: actions.profile.IMAGE_UPDATED,
           data: response.data,
         })
       }
     } catch (error) {
       dispatch({
         type: actions.profile.DATA_FETCH_ERROR,
         error: error.message,
       })
     }
   }
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt={state?.user?.firstName}
      />

      <form id="form" encType="multipart/form-data">
        <button
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          onClick={handleImageUpload}
          type="submit">
          <img src={EditIcon} alt="Edit" />
        </button>
        <input id="file" type="file" ref={fileUploaderRef} hidden />
      </form>
    </div>
  )
}