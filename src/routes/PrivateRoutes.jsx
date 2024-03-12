import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { useAuth } from "../hooks";
import Footer from "../components/common/Footer";
import { useEffect } from "react";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.authToken) {
      navigate("/login");
    }
  }, [auth?.authToken, navigate]);
  return (
    <>
      {auth?.authToken && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
