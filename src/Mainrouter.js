import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Signup/Register';
import Loginpage from './Signup/Loginpage'
import Navigationbar from './Navigationbar';
import Admin from './Admin/Admin';
import Neuro from "./Department/Neuro";
import Cardio from './Department/Cardio';
import Dermato from './Department/Dermato';
import Ortho from './Department/Ortho';
import DepartmentHead from './DepartmentHead/DepartmentHead';
import Logout from './Logout/Logout'
const Mainrouter = () => {
  return (
        <div>
       
    <Routes>
      
    
        <Route path="/" element={<Register/>} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Navigationbar" element={<Navigationbar />} />




            <Route path="/Admin" element={<Admin/>} />

            <Route path="/Neuro" element={<Neuro/>} />
            <Route path="/Ortho" element={<Ortho/>} />
            <Route path="/Dermato" element={<Dermato/>} />
            <Route path="/Cardio" element={<Cardio/>} />
            
            <Route path="/DepartmentHead" element={<DepartmentHead/>} />
            <Route path="/Logout" element={<Logout/>} />





            




      
    

      
    </Routes>
    </div>
  );
};

export default Mainrouter;


