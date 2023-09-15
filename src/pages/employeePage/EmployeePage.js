import React from 'react';
import AddEmployee from '../../contents/employees/AddEmployee';
import EmployeeList from '../../contents/employees/EmployeeList';
import EditEmployee from '../../contents/employees/EditEmployee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet } from 'react-router-dom';

const EmployeePage = () => {
  return (
    <div>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="employee-list" className="nav-link">
                EMPLOYEES
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                {/* <Link to="create-employee" className="nav-link">
                  Add Employee
                </Link> */}
              </Nav>
              {/* <Nav>
                <Link to="employee-list" className="nav-link">
                  Employees
                </Link>
              </Nav> */}
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeePage;

// import React, { useEffect, useState } from 'react';
// import employeeStore from '../stores/store';
// import Employees from '../contents/employee/Employees';
// import EditEmployee from '../contents/employee/EditEmployee';
// import AddEmployee from '../contents/employee/AddEmployee';
// import '../contents/employee/employee.css';

// const EmployeeTable = () => {
//   const store = employeeStore();

//   useEffect(() => {
//     store.getEmployees();
//   }, []);

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const showEmployeeDetails = (employee) => {
//     setSelectedEmployee(employee);
//   };
//   return (
//     <>
//       <h1 className="font6" style={{ margin: 0, padding: 0 }}>
//         Employee Records
//       </h1>
//       <AddEmployee />
//       <Employees />
//       <EditEmployee />

//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         {selectedEmployee && (
//           <div className="employee-details">
//             <h2>Employee Details</h2>

//             <p>Name: {selectedEmployee.name}</p>
//             <p>Breed: {selectedEmployee.breed}</p>
//             <button onClick={() => setSelectedEmployee(null)}>Close</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default EmployeeTable;
