// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
//  import './Signpage.css';

// const Signup = () => {
//   const [todos, setTodos] = useState([]);
//  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('http://localhost:6000/api/employees');
//       setTodos(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSignup = () => {
//     // Perform signup logic here
//     console.log('Signing up...');
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="form-container">
//       <h2>Sign Up</h2>
//       <form>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="button" onClick={handleSignup}>Sign Up</button>
//       </form>
//     </div>
//   );
// };

// const Signin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignin = () => {
//     // Perform signin logic here
//     console.log('Signing in...');
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="form-container">
//       <h2>Sign In</h2>
//       <form>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="button" onClick={handleSignin}>Sign In</button>
//       </form>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Signup />
//       <Signin />
//     </div>
//   );
// };

// export default App;


// import React, { useState} from 'react';
// import axios from 'axios';
// import './Style.css'

// function SignupForm({ onSignup }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


 

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     axios
//     .post('http://localhost:6000/signup', {
//       email: signupEmail,
//       password: signupPassword,
//     })
//     .then((response) => {
//       // Handle the response from the API
//       console.log(response.data); // You can do further processing based on the response
//       setIsSignedIn(true); // Set the user as signed in if signup is successful
//     })
//     .catch((error) => {
//       // Handle any errors that occur during the signup process
//       console.error(error);
//     });
// };

    
//     try {
//       const response = axios.post('http://localhost:6000/signup', {
//         name,
//         email,
//         password
//       });
      

//       // Call the onSignup function with the response data
//       onSignup(response.data);
//     } catch (error) {
//       console.error('Signup error:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Sign Up</h3>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );


// function SigninForm({ onSignin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:6000/signin', {
//         email,
//         password
//       });
//       // Call the onSignin function with the response data
//       onSignin(response.data);
//     } catch (error) {
//       console.error('Signin error:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Sign In</h3>
//       <form onSubmit={handleSignin}>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// function SignupSigninPage() {
//   const handleSignup = (signupData) => {
//     // Handle signup data
//     // ...
//     console.log('Signup:', signupData);
//   };

//   const handleSignin = (signinData) => {
//     // Handle signin data
//     // ...
//     console.log('Signin:', signinData);
//   };

//   return (
//     <div>
//       <h2>Signup signin form</h2>
//       <SignupForm onSignup={handleSignup} />
//       <SigninForm onSignin={handleSignin} />
//     </div>
//   );
// }

// export default SignupSigninPage;




