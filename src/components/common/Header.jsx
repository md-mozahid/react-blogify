import { Link } from "react-router-dom";
import { Logo, SearchIcon } from "../../constant/images";
import { useAuth } from "../../hooks/useAuth";
import Logout from "./Logout";
import { useState } from "react";
import { createPortal } from "react-dom";
import SearchModal from "../../pages/SearchModal";

export default function Header() {
  const { auth } = useAuth();
  const [searchModal, setSearchModal] = useState(false);

  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={Logo} alt="lws" />
          </Link>
        </div>
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
            {searchModal && createPortal(<SearchModal onClose={setSearchModal} />, document.body)}

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
            {auth?.user && (
              <Link to="/profile">
                <li className="flex items-center">
                  <div className="avater-img bg-orange-600 text-white">
                    <span className="uppercase">
                      {auth?.user?.firstName.slice(0, 1)}
                    </span>
                  </div>
                  <span className="text-white ml-2">
                    {auth?.user?.firstName} {auth?.user?.lastName}
                  </span>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
