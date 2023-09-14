import axios from 'axios';
const baseUrl = 'http://localhost:1994/invoices';
const employeeUrl = 'http://localhost:1994/employees';

const getAllInvoices = (setInvoices) => {
  axios.get(baseUrl).then(({ data }) => {
    setInvoices(data.invoices);
  });
};
const getAllEmployees = (setEmployees) => {
  axios.get(employeeUrl).then(({ data }) => {
    setEmployees(data.employees);
  });
};
export { getAllInvoices, getAllEmployees };
