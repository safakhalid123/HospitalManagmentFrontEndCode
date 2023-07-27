



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the registration endpoint
      const response = await axios.post('http://localhost:8000/register', { username, password });
      console.log(response.data); // Optional: Display the response

      // Registration successful
      setErrorMessage('');
      // Reset the input fields
      setUsername('');
      setPassword('');
      navigate('/Loginpage');
    } catch (error) {
      // Handle registration error
      console.error('Registration failed', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className='container'>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className='user'>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='pass'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      <p>Already have an account</p>
      <Link to="/Loginpage"><button>Login</button></Link>
    </div>
  );
};

export default Register;
