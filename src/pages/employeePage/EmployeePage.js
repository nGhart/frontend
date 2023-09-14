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
