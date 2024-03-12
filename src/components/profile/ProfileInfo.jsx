import { useAuth } from '../../hooks'
import { useProfile } from '../../hooks/useProfile'
import Bio from './Bio'
import ProfileImg from './ProfileImg'

export default function ProfileInfo() {
  const { auth } = useAuth()
  const { state } = useProfile()

  const user = auth?.user ?? state?.user
  const isLoggedInUser = auth?.user?.id === state?.user?.id

  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileImg isLoggedInUser={isLoggedInUser} user={user} />
        <div>
          <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="leading-[231%] lg:text-lg">{user?.email}</p>
        </div>
        <Bio />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </>
  )
}
