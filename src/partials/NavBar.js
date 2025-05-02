import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect id="Rectangle_3" data-name="Rectangle 3" width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c" />
      <rect id="Rectangle_5" data-name="Rectangle 5" width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c" />
      <rect id="Rectangle_4" data-name="Rectangle 4" width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c" />
    </g>
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [username, setUsername] = useState(null);
  
  const { setUserInfo, userInfo } = useContext(UserContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    // Fetch user info when the component mounts
    fetch("https://thewondererspenbackend.onrender.com/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
        setUsername(userInfo?.username); // Set username to the state for reactivity
      });
  }, [setUserInfo]); // Set userInfo only when it changes

  const logout = () => {
    fetch("https://thewondererspenbackend.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    })
      .then(() => {
        setUserInfo(null);
        setUsername(null); // Clear username after logout
        toast.info("Logged out", {
          onClose: () => navigate("/"),
        });
      });
  };

  const closeNavbarAndNavigate = (path) => {
    setShowNavbar(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/The Wonderer's Pen.png" alt="logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => closeNavbarAndNavigate("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={() => closeNavbarAndNavigate("/blogs")}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => closeNavbarAndNavigate("/contact")}>
                CONTACT US
              </Link>
            </li>
            {username && (
              <>
                <li>
                  <Link to="/create" onClick={() => closeNavbarAndNavigate("/create")}>
                    CREATE NEW POST
                  </Link>
                </li>
                <li>
                  <a onClick={() => { logout(); closeNavbarAndNavigate("/"); }}>
                    LOGOUT ({username})
                  </a>
                </li>
              </>
            )}
            {!username && (
              <>
                <li>
                  <Link to="/login" onClick={() => closeNavbarAndNavigate("/login")}>
                    LOGIN
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={() => closeNavbarAndNavigate("/register")}>
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
