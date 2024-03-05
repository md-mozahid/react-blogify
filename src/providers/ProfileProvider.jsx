import { useReducer } from 'react'
import { AuthContext } from '../context'
import { initialState } from '../reducers/InitialState'
import { ProfileReducer } from '../reducers/ProfileReducer'

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(ProfileReducer, initialState)
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
