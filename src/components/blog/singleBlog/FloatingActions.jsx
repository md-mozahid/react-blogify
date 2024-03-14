import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { actions } from '../../../actions'
import { localhostApi } from '../../../api'
import {
  CommentIcon,
  HeartFilledIcon,
  HeartIcon,
  LikeFilledIcon,
  LikeIcon,
} from '../../../constant/images'
import { useApi, useAuth, useSingleBlog } from '../../../hooks'
import useFavorite from '../../../hooks/useFavorite'

export default function FloatingActions({ blog }) {
  const { auth } = useAuth()
  const { serverApi } = useApi()
  const { dispatch } = useSingleBlog()
  const [like, setLike] = useState(
    blog?.likes?.some((l) => l.id === auth?.user?.id)
  )
  const { favoriteBlogs } = useFavorite()
  const [isFav, setIsFav] = useState(false)

  // handle likes
  const handleLike = async () => {
    if (!auth?.user) {
      toast.error('Please login to like the blog!')
    }

    try {
      const response = await serverApi.post(
        `${localhostApi}/blogs/${blog?.id}/like`
      )
      if (response.status === 200) {
        if (response?.data?.isLiked) {
          dispatch({
            type: actions.blog.BLOG_LIKED,
            data: response.data,
          })
          setLike(true)
        } else {
          setLike(false)
        }
      }
    } catch (error) {
      if (error && error.response.status === 403) {
        toast.error(error.message)
      } else {
        toast.error('An error ocurred in like!')
      }
    }
  }

  // handle favorite
  useEffect(() => {
    const isFavorite = favoriteBlogs?.some((fav) => fav.id === blog?.id)
    setIsFav(isFavorite)
  }, [blog?.id, favoriteBlogs])

  const handleFavorite = async () => {
    if (!auth?.user) {
      toast.error('Please login to favorite the blog!')
    }

    try {
      const response = await serverApi.patch(
        `${localhostApi}/blogs/${blog?.id}/favourite`
      )

      if (response.status === 200) {
        if (response.data?.isFavourite) {
          // dispatch({
          //   type: actions.blog.BLOG_FAVORITE,
          //   data: response.data,
          // })
          setIsFav(true)
          toast.success('Blog added to favorite')
        } else {
          setIsFav(false)
        }
      }
    } catch (error) {
      if (error && error.response.status === 403) {
        toast.error(error.message)
      } else {
        toast.error('An error ocurred in favorite blog!')
      }
    }
  }

  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={handleLike}>
          <img src={like ? LikeFilledIcon : LikeIcon} alt="like" />
          <span>{blog?.likes?.length ?? 0}</span>
        </li>
        <li onClick={handleFavorite}>
          <img src={isFav ? HeartFilledIcon : HeartIcon} alt="favorite" />
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="comments" />
            <span>{blog?.comments?.length ?? 0}</span>
          </li>
        </a>
      </ul>
    </div>
  )
}
