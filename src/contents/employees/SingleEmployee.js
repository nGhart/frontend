// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// class SingleEmployee extends Component {
//   constructor(props) {
//     super(props);
//     this.deleteEmployee = this.deleteEmployee.bind(this);
//   }
//   deleteEmployee() {
//     axios
//       .delete(
//         'http://localhost:4000/employees/delete-employee/' + this.props.obj._id
//       )
//       .then((res) => {
//         console.log('Successfully deleted!');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <tr>
//         <td></td>
//         <td>{this.props.obj.employeeName}</td>
//         <td>{this.props.obj.employeeRole}</td>
//         <td>{this.props.obj.employeeDepartment}</td>
//         <td>{this.props.obj.employeeNumber}</td>
//         <td>{this.props.obj.employeeSalary}</td>
//         <td>{this.props.obj.employeeStartDate}</td>
//         <td>{this.props.obj.employeeEndDate}</td>
//         <td>
//           <Link
//             className="edit-link"
//             to={'/edit-employee/' + this.props.obj._id}
//           >
//             <button>Edit</button>
//           </Link>

//           <button onClick={this.deleteEmployee}>Delete</button>
//         </td>
//       </tr>
//     );
//   }
// }

// export default SingleEmployee;
