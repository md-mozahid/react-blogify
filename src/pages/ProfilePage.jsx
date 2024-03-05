import MyPost from '../components/profile/MyPost'
import ProfileInfo from '../components/profile/ProfileInfo'

export default function ProfilePage() {
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileInfo />
      </div>
      <MyPost />
    </>
  )
}
