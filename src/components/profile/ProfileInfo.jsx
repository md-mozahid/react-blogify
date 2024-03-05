import { useAuth } from '../../hooks/useAuth'
import Bio from './Bio'
import ProfileImg from './ProfileImg'

export default function ProfileInfo() {
  const { auth } = useAuth()
  return (
    <>
      <ProfileImg />
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {auth?.user?.firstName} {auth?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{auth?.user?.email}</p>
      </div>
      <Bio />
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </>
  )
}
