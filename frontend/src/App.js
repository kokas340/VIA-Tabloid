import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//src
import Home from './components/HomePage';
import Login from './components/LoginPage';
import Profile from './components/ProfilePage';
import Signup from './components/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile/:userId" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
