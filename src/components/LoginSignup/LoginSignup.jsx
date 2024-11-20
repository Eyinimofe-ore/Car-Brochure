// LoginSignup.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'; // Back arrow icon
import './LoginSignup.css';

const LoginSignup = ({ initialState = 'login' }) => {
  const [isLogin, setIsLogin] = useState(initialState === 'login');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    setIsLogin(initialState === 'login');
  }, [initialState]);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <BiArrowBack className="back-arrow" onClick={handleBack} /> {/* Back arrow */}
        <h2 className="auth-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" className="auth-input" required />
          )}
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button onClick={toggleForm} className="toggle-button">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
