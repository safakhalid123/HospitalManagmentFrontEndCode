import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import { NavDropdown } from 'react-bootstrap';

const Admin = () => {
  const [employees, setEmployees] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { empId, name, position, department } = e.target.elements;

    const newEmployee = {
      empId: empId.value,
      name: name.value,
      position: position.value,
      department: department.value,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/employees', newEmployee);
      setEmployees([...employees, response.data]);
    } catch (error) {
      console.error(error);
    }

    // Clear input fields
    e.target.reset();
  };

  return (
    <div>
     
       {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        

      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
      <div className='container'>
      <div>
          <label htmlFor="empId">Employee ID:</label>
          <input type="text" id="empId" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" required />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" required/>
          <NavDropdown title="add " id="collasible-nav-dropdown">
              
              <NavDropdown.Item href="/Neuro">Neurology</NavDropdown.Item>
              <NavDropdown.Item href="/Ortho">Orthopedics</NavDropdown.Item>
               <NavDropdown.Item href="/Dermato">Dermatology </NavDropdown.Item>
               <NavDropdown.Item href="/Cardio">Cardiology</NavDropdown.Item>
          </NavDropdown>
          
          
          
        </div><br></br>
        <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Admin;















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Admin.css';
// import { NavDropdown } from 'react-bootstrap';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('/api/employees');
//       setEmployees(response.data);
//       // setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { empId, name, position, department } = e.target.elements;

//     const newEmployee = {
//       empId: empId.value,
//       name: name.value,
//       position: position.value,
//       department: department.value,
//     };

//     try {
//       const response = await axios.post('http://localhost:8000/api/employees', newEmployee);
//       setEmployees([...employees, response.data]);
//     } catch (error) {
//       console.error(error);
//     }

//     // Clear input fields
//     e.target.reset();
//   };

//   return (
//     <div>
     
      
//       {/* )}  */}
          
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//       <div className='container'>
//       <div>
//           <label htmlFor="empId">Employee ID:</label>
//           <input type="text" id="empId" required />
//         </div>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" required />
//         </div>
//         <div>
//           <label htmlFor="position">Position:</label>
//           <input type="text" id="position" required />
//         </div>
//         <div>
//           <label htmlFor="department">Department:</label>
//           <input type="text" id="department" required/>
//           <NavDropdown title="add " id="collasible-nav-dropdown">
              
//               <NavDropdown.Item href="/neuro">Neurology</NavDropdown.Item>
//               <NavDropdown.Item href="/Ortho">Orthopedics</NavDropdown.Item>
//                <NavDropdown.Item href="/Dermato">Dermatology </NavDropdown.Item>
//                <NavDropdown.Item href="/Cardio">Cardiology</NavDropdown.Item>
//           </NavDropdown>
          
          
          
//         </div><br></br>
//         <button type="submit">submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EmployeeList;


