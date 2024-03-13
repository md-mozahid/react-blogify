import { useEffect, useState } from 'react'
import { localhostApi } from '../api'
import { useApi } from './useApi'

export default function useFavorite() {
  const [favoriteBlogs, setFavoriteBlogs] = useState([])
  const [error, setError] = useState(null)
  const { serverApi } = useApi()

  useEffect(() => {
    // set loading true
    const fetchFavoriteBlogs = async () => {
      try {
        const response = await serverApi.get(`${localhostApi}/blogs/favourites`)

        if (response.status === 200) {
          setFavoriteBlogs(response.data.blogs)
        }
      } catch (error) {
        if (error && error.response.status === 403) {
          setError(error.message)
        } else {
          setError('An error ocurred in get favorite blog!')
        }
      }
    }
    fetchFavoriteBlogs()
  }, [serverApi])

  return { favoriteBlogs, error }
}
