import { useReducer } from 'react'
import { ProfileContext } from '../context'
import { initialState } from '../reducers/InitialState'
import { ProfileReducer } from '../reducers/ProfileReducer'

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(ProfileReducer, initialState)

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  )
}
