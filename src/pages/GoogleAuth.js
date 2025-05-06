import { GoogleLogin } from '@react-oauth/google'; // This package allows Google OAuth login
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async (response) => {
    try {
      // Send the Google OAuth token to your backend for verification
      const res = await fetch('https://thewondererspenbackend.onrender.com/google-login', {
        method: 'POST',
        body: JSON.stringify({ token: response.credential }), // send the Google token
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (res.ok) {
        const userInfo = await res.json();
        setUserInfo(userInfo);
        toast.success('Login successful', {
          onClose: () => navigate('/'),
        });
      } else {
        throw new Error('Google login failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Google login failed. Please try again.');
    }
  };

  return (
    <div className="google-login-container">
      <GoogleLogin
        onSuccess={handleGoogleLogin} // This function will be called after a successful login
        onError={() => toast.error('Login failed')} // Error handling
      />
    </div>
  );
}
