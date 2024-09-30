import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import ChatStyles from '../styles/ChatStyles';

const Login = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className={ChatStyles.loginContainer}>
      <h2 className={ChatStyles.loginHeader}>Welcome to Chat App</h2>
      <button onClick={handleGoogleLogin} className={ChatStyles.loginButton}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;