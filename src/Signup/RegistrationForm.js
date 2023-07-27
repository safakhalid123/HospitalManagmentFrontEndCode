import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [profile, setProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/register', {
        username,
        password,
      });
      console.log(response.data); // Success message
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });
      const token = response.data.token;
      setToken(token);
      localStorage.setItem('token',token);
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  const handleProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('No token found');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8000/profile', {
        headers: { Authorization: token },
      });
      setProfile(response.data);
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Authentication Example</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleProfile}>Profile</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      {profile && (
        <div>
          <h2>User Profile</h2>
          <p>Username: {profile.username}</p>
        </div>
      )}
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// // import './Style.css';

// const UserForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send POST request to backend API
//       await axios.post('http://localhost:8000/register', { name, email, password });

//       // Reset form fields
//       setName('');
//       setEmail('');
//       setPassword('');

//       alert('User created successfully');
//     } catch (error) {
//       alert('Failed to create user');
//       navigate("/Loginpage");
//     }
//   };

//   const navigate = useNavigate();
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Create User</button>
//     </form>
//   );
// };

// export default UserForm;

