import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { toast } from "react-toastify";

export default function Logout() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({});
    navigate("/");
    toast.success("Logout successful");
  };
  return (
    <>
      <button
        className="text-white/50 hover:text-white transition-all
          duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
