import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      alert('Username already exists.');
      return;
    }

    const existingEmail = users.find(u => u.email === email);
    if (existingEmail) {
      alert('Email already exists.')
      return;
    }

    const newUser = {
      id: Date.now(),
      username,
      email,
      password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    onLogin();

    alert('Account created successfully!');
    navigate('/');
  };

  return (
    <div className='signup-page'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className='signup-form'>
          <div className='form-group'>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='signup-btn'>Sign Up</button>
        </form>
        <div className="login-link">Already have an account? <Link to="/login">Login here</Link></div>
      </div>
    </div>
  );
};

export default SignUp;
