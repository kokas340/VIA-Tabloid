import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Navbar from './Navbar';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('User->', username);
    console.log('Pass=>', password);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
