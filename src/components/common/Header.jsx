import { Link, useNavigate } from "react-router-dom";
import { Logo, SearchIcon } from "../../constant/images";
import { useAuth } from "../../hooks/useAuth";
import Logout from "./Logout";
import { useState } from "react";
import { createPortal } from "react-dom";
import SearchModal from "../../pages/SearchModal";
import { localhostApi } from "../../api";
import { useProfile } from "../../hooks";

export default function Header() {
  const { auth } = useAuth();
  const { setAuthor } = useProfile();
  const navigate = useNavigate();
  const [searchModal, setSearchModal] = useState(false);
  const user = auth?.user;

  return (
    <header>
      <nav className="container">
        <Link to="/">
          <img className="w-32" src={Logo} alt="lws" />
        </Link>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/create-blog"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            {auth?.user && (
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setSearchModal(!searchModal)}
              >
                <img src={SearchIcon} alt="Search" />
                <span>Search</span>
              </li>
            )}
            {searchModal &&
              createPortal(
                <SearchModal onClose={setSearchModal} />,
                document.body
              )}

            <li>
              {auth?.user ? (
                <Logout />
              ) : (
                <Link
                  to="/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              )}
            </li>

            <li
              className="flex items-center cursor-pointer"
              onClick={() => {
                setAuthor(user?.id);
                navigate("/profile");
              }}
            >
              {user && user?.avatar ? (
                <div>
                  <img
                    src={`${localhostApi}/uploads/avatar/${user?.avatar}`}
                    alt="avatar"
                    className="rounded-full w-10"
                  />
                </div>
              ) : (
                user && (
                  <div className="avater-img bg-orange-600 text-white">
                    <span className="uppercase">
                      {user?.firstName?.charAt(0)}
                    </span>
                  </div>
                )
              )}
              <span className="text-white ml-2">
                {user?.firstName} {auth?.user?.lastName}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
