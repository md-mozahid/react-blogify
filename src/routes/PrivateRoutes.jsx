import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";
import BlogProvider from "../providers/BlogProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth?.authToken ? (
        <>
          <BlogProvider>
            <ProfileProvider>
              <Header />
              <main className="">
                <div className="container">
                  <Outlet />
                </div>
              </main>
            </ProfileProvider>
          </BlogProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
