import { Container,Nav,Navbar,NavDropdown,NavLink } from 'react-bootstrap';
// import { Routes,Route } from 'react-router-dom';
// import Admin from './Admin/Admin';
// import Cardio from './Department/Cardio';
// import Neuro from './Department/Neuro';
// import Ortho from './Department/Ortho';
// import DepartmentHead from './DepartmentHead/DepartmentHead';
// import Dermato from './Department/Dermato';
// import Logout from './Logout/Logout';
// import Register from './Signup/Register';
// import Loginpage from './Signup/Loginpage'
function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" variant="light"  sticky="top" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <NavLink href="/Admin">admin</NavLink>
            

            <NavDropdown title="Departments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/neuro">Neurology</NavDropdown.Item>
              <NavDropdown.Item href="/Ortho">Orthopedics</NavDropdown.Item>
               <NavDropdown.Item href="/Dermato">Dermatology</NavDropdown.Item>
               <NavDropdown.Item href="/Cardio">Cardiology</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="/Departmenthead">DepartmentHead</Nav.Link>
            <Nav.Link href="/Logout">Logout </Nav.Link>
            

          


          </Nav>
        </Container>
      </Navbar>
       {/* <Routes> 
            <Route path="/Register" element={<Register/>} />
            <Route path="/Loginpage" element={<Loginpage/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Cardio" element={<Cardio/>} />
            <Route path="/Dermato" element={<Dermato/>} />
            <Route path="/Neuro" element={<Neuro/>} />
            <Route path="/Ortho" element={<Ortho/>} />
            <Route path="/DepartmentHead" element={<DepartmentHead/>} />
            <Route path="/Logout" element={<Logout/>} />

  </Routes>
       */}

      
      
    </>
  );
}

export default Navigationbar;
