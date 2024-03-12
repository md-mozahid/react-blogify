import { useReducer, useState } from "react";
import { ProfileContext } from "../context";
import { useAuth } from "../hooks";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

export default function ProfileProvider({ children }) {
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [author, setAuthor] = useState(auth?.user?.id);

  return (
    <ProfileContext.Provider value={{ state, dispatch, author, setAuthor }}>
      {children}
    </ProfileContext.Provider>
  );
}
