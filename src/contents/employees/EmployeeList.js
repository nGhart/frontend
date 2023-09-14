import React, { useEffect, useState } from 'react';
import SingleEmployee from './SingleEmployee';
import { getAllEmployees } from '../../utilities/handleInvoiceApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const initialFormState = {
    employeeName: '',
    employeeRole: '',
    employeeNumber: '',
    employeeDepartment: '',
    employeeSalary: '',
    employeeStartDate: '',
    employeeEndDate: '',
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const resetForm = () => {
    setFormValues(initialFormState);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createEmployee = (employeeData, setEmployees) => {
    axios
      .post(`http://localhost:1994/employees`, employeeData)
      .then((response) => {
        console.log(response.data);
        setEmployees([]);
        resetForm();
        getAllEmployees(setEmployees);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllEmployees(setEmployees);
  }, []);

  const deleteEmployee = (employeeId) => {
    console.log('first');
    axios
      .delete(`http://localhost:1994/employees/${employeeId}`) // Corrected URL
      .then(() => {
        // After successfully deleting, update the employees list
        const updatedEmployees = employees.filter(
          (employee) => employee._id !== employeeId
        );
        setEmployees(updatedEmployees);
      })
      .catch((error) => {
        console.error('Error deleting employee: ', error);
      });
  };

  return (
    <div>
      <h1>employee can be seen</h1>
      <Button variant="primary" onClick={handleShow}>
        Add New Entry
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="employeeName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={formValues.employeeName}
                onChange={(e) => handleInputChange(e, 'employeeName')}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="employeeRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={formValues.employeeRole}
                onChange={(e) => handleInputChange(e, 'employeeRole')}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="employeeDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                value={formValues.employeeDepartment}
                onChange={(e) => handleInputChange(e, 'employeeDepartment')}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="employeeNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                value={formValues.employeeNumber}
                onChange={(e) => handleInputChange(e, 'employeeNumber')}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="employeeSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                value={formValues.employeeSalary}
                onChange={(e) => handleInputChange(e, 'employeeSalary')}
                type="number"
              />
            </Form.Group>
            <Form.Group controlId="employeeStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                value={formValues.employeeStartDate}
                onChange={(e) => handleInputChange(e, 'employeeStartDate')}
                type="date"
              />
            </Form.Group>
            <Form.Group controlId="employeeEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                value={formValues.employeeEndDate}
                onChange={(e) => handleInputChange(e, 'employeeEndDate')}
                type="date"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => createEmployee(formValues, setEmployees)}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>NUMBER</th>
            <th>SALARY</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td></td>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeRole}</td>
              <td>{employee.employeeDepartment}</td>
              <td>{employee.employeeNumber}</td>
              <td>{employee.employeeSalary}</td>
              <td>{employee.employeeStartDate}</td>
              <td>{employee.employeeEndDate}</td>

              <td>
                {/* <button onClick={() => setSelectedEmployee(employee)}>
                  Edit
          </button>*/}
                <button onClick={() => deleteEmployee(employee._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
