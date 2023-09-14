// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// const EditEmployee = ({
//   selectedEmployee,
//   handleClose,
//   handleInputChange,
//   updateEmployee,
// }) => {
//   return (
//     <Modal
//       show={!!selectedEmployee}
//       onHide={handleClose}
//       animation={false}
//       backdrop="static"
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Employee</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={updateEmployee}>
//           <Form.Group controlId="employeeName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeName}
//               onChange={(e) => handleInputChange(e, 'employeeName')}
//               type="text"
//             />
//           </Form.Group>
//           <Form.Group controlId="employeeRole">
//             <Form.Label>Role</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeRole}
//               onChange={(e) => handleInputChange(e, 'employeeRole')}
//               type="text"
//             />
//           </Form.Group>
//           <Form.Group controlId="employeeDepartment">
//             <Form.Label>Department</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeDepartment}
//               onChange={(e) => handleInputChange(e, 'employeeDepartment')}
//               type="text"
//             />
//           </Form.Group>
//           <Form.Group controlId="employeeNumber">
//             <Form.Label>Number</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeNumber}
//               onChange={(e) => handleInputChange(e, 'employeeNumber')}
//               type="text"
//             />
//           </Form.Group>
//           <Form.Group controlId="employeeSalary">
//             <Form.Label>Salary</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeSalary}
//               onChange={(e) => handleInputChange(e, 'employeeSalary')}
//               type="number"
//             />
//           </Form.Group>
//           <Form.Group controlId="employeeStartDate">
//             <Form.Label>Start Date</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeStartDate}
//               onChange={(e) => handleInputChange(e, 'employeeStartDate')}
//               type="date"
//             />
//           </Form.Group>
//           <Form.Group controlId="employeeEndDate">
//             <Form.Label>End Date</Form.Label>
//             <Form.Control
//               value={selectedEmployee.employeeEndDate}
//               onChange={(e) => handleInputChange(e, 'employeeEndDate')}
//               type="date"
//             />
//           </Form.Group>
//           <Button size="lg" block="block" type="submit">
//             Save Changes
//           </Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={updateEmployee}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default EditEmployee;

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditEmployee = ({
  selectedEmployee,
  handleClose,
  handleInputChange,
  updateEmployee,
}) => {
  return (
    <Modal
      show={!!selectedEmployee}
      onHide={handleClose}
      animation={false}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateEmployee}>
          <Form.Group controlId="employeeName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeName}
              onChange={(e) => handleInputChange(e, 'employeeName')}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="employeeRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeRole}
              onChange={(e) => handleInputChange(e, 'employeeRole')}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="employeeDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeDepartment}
              onChange={(e) => handleInputChange(e, 'employeeDepartment')}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="employeeNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeNumber}
              onChange={(e) => handleInputChange(e, 'employeeNumber')}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="employeeSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeSalary}
              onChange={(e) => handleInputChange(e, 'employeeSalary')}
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="employeeStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeStartDate}
              onChange={(e) => handleInputChange(e, 'employeeStartDate')}
              type="date"
            />
          </Form.Group>
          <Form.Group controlId="employeeEndDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              value={selectedEmployee.employeeEndDate}
              onChange={(e) => handleInputChange(e, 'employeeEndDate')}
              type="date"
            />
          </Form.Group>
          <Button size="lg" block="block" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updateEmployee}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditEmployee;
