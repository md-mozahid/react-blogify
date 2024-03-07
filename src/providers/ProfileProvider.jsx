import { useReducer } from "react";
import { ProfileContext } from "../context";
import {
  profileReducer,
  initialState,
} from "../reducers/profileReducer/ProfileReducer";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}
