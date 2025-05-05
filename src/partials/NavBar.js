import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/App.css";

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="white"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="white"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="white"
      />
    </g>
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("https://thewondererspenbackend.onrender.com/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch("https://thewondererspenbackend.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    toast.info("Logged out", {
      onClose: () => navigate("/"),
    });
  }

  const username = userInfo?.username;

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
                <button
    onClick={() => {
      logout();
      closeNavbarAndNavigate("/");
    }}
    className="logout-button"
  >
    LOGOUT ({username})
  </button>
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
