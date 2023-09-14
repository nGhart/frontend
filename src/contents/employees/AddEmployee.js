// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// //import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';

// class AddEmployee extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
//     this.onChangeEmployeeRole = this.onChangeEmployeeRole.bind(this);
//     this.onChangeEmployeeNumber = this.onChangeEmployeeNumber.bind(this);
//     this.onChangeEmployeeDepartment =
//       this.onChangeEmployeeDepartment.bind(this);
//     this.onChangeEmployeeSalary = this.onChangeEmployeeSalary.bind(this);
//     this.onChangeEmployeeStartDate = this.onChangeEmployeeStartDate.bind(this);
//     this.onEmployeeEndDate = this.onEmployeeEndDate.bind(this);

//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       employeeName: '',
//       employeeRole: '',
//       employeeNumber: '',
//       employeeDepartment: '',
//       employeeSalary: '',
//       employeeStartDate: '',
//       employeeEndDate: '',
//     };
//   }

//   onChangeEmployeeName(e) {
//     this.setState({ employeeName: e.target.value });
//   }
//   onChangeEmployeeRole(e) {
//     this.setState({ employeeRole: e.target.value });
//   }
//   onChangeEmployeeNumber(e) {
//     this.setState({ employeeNumber: e.target.value });
//   }
//   onChangeEmployeeDepartment(e) {
//     this.setState({ employeeDepartment: e.target.value });
//   }
//   onChangeEmployeeSalary(e) {
//     this.setState({ employeeSalary: e.target.value });
//   }
//   onChangeEmployeeStartDate(e) {
//     this.setState({ employeeStartDate: e.target.value });
//   }
//   onChangeEmployeeEndDate(e) {
//     this.setState({ employeeEndDate: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const employeeObject = {
//       employeeName: this.state.employeeName,
//       employeeRole: this.state.employeeRole,
//       employeeNumber: this.state.employeeNumber,
//       employeeDepartment: this.state.employeeDepartment,
//       employeeSalary: this.state.employeeSalary,
//       employeeStartDate: this.state.employeeStartDate,
//       employeeEndDate: this.state.employeeEndDate,
//     };
//     axios
//       .post('http://localhost:1994/employees/create-employee', employeeObject)
//       .then((res) => console.log(res.data));
//     this.setState({
//       employeeName: '',
//       employeeRole: '',
//       employeeNumber: '',
//       employeeDepartment: '',
//       employeeSalary: '',
//       employeeStartDate: '',
//       employeeEndDate: '',
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>AddEmployee</h1>

//       </div>
//     );
//   }
// }

// export default AddEmployee;

// // const [show, setShow] = useState(false);

// // const handleClose = () => setShow(false);
// // const handleShow = () => setShow(true);
// {
//   /* <Button
//           variant="primary"
//           //onClick={handleShow}
//         >
//           Launch static backdrop modal
//         </Button>
// }
// {
//    <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body></Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               //onClick={handleClose}
//             >
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer>
//         </Modal>
// }

// // import React from 'react';

// // const AddEmployee = () => {
// //   return <div>AddEmployee</div>;
// // };

// // export default AddEmployee;
