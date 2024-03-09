import { useEffect, useState } from "react";
import { AuthContext } from "../context";

export default function AuthProvider({ children }) {
  const localAuth = localStorage.getItem("auth");
  const initialAuth = localAuth ? JSON.parse(localAuth) : {};
  const [auth, setAuth] = useState(initialAuth);

  useEffect(() => {
    if (auth?.authToken) {
      localStorage.setItem("auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
