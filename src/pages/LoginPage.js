import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/forms.css";
import GoogleAuth from "./GoogleAuth";  



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("https://thewondererspenbackend.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          toast.success("Login verified", {
            onClose: () => navigate("/"),
          });
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
    }
  }
  function createAccount() {
    navigate("/register");
  }


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <div className="heading"><h1>Sign In</h1></div>
        <div className="user-image-container">
          <img
            src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
            alt="User"
            className="user-image"
          />
        </div>
        <div className="loginbuttons">
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        </div>
        
        <button className="button-forms" type="submit">
          Login
        </button>
        <GoogleAuth />
      </form>
      <div className="create-account-container">
        <p className="p1">New Here ?</p>
        <p className="p2">Sign up and discover a great amount of new knowledge</p>
        <button className="register" onClick={createAccount}>
          Sign Up
        </button>
      </div>
      <ToastContainer />
      
    </div>
    
  );
}
