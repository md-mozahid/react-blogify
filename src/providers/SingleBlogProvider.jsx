import { useReducer, useState } from 'react'
import { SingleBlogContext } from '../context'
import {
  initialState,
  singleBlogReducer,
} from '../reducers/singleBlogReducer/SingleBlogReducer'

export default function SingleBlogProvider({ children }) {
  const [state, dispatch] = useReducer(singleBlogReducer, initialState)
  const [blogId, setBlogId] = useState(null)
  return (
    <SingleBlogContext.Provider value={{ state, dispatch, blogId, setBlogId }}>
      {children}
    </SingleBlogContext.Provider>
  )
}
