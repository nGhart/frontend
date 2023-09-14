import React, { useEffect, useState } from 'react';
import SingleInvoice from './SingleInvoice';
import { getAllInvoices } from '../../utilities/handleInvoiceApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [show, setShow] = useState(false);
  const initialFormState = {
    clientName: '',
    email: '',
    clientEmail: '',
    clientNumber: '',
    buckPrice: '',
    clientBuckCount: '',
    doePrice: '',
    clientDoeCount: '',
    kitPrice: '',
    clientKitCount: '',
    manurePrice: '',
    clientManureCount: '',
  };
  const [formValues, setFormValues] = useState(initialFormState);
  const baseUrl = 'http://localhost:1994/invoices';

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

  const createInvoice = (invoiceData, setInvoices) => {
    axios
      .post(`${baseUrl}`, invoiceData)
      .then((response) => {
        console.log(response.data);
        setInvoices([]);
        resetForm();
        getAllInvoices(setInvoices);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllInvoices(setInvoices);
  }, []);

  return (
    <div>
      <h1>invoice can be seen</h1>
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
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={formValues.clientName}
                onChange={(e) => handleInputChange(e, 'clientName')}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={formValues.clientEmail}
                onChange={(e) => handleInputChange(e, 'clientEmail')}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                value={formValues.clientNumber}
                onChange={(e) => handleInputChange(e, 'clientNumber')}
                type="text"
                placeholder="Enter number"
              />
            </Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>Doe</InputGroup.Text>
              <Form.Control
                type="number"
                value={formValues.doePrice}
                onChange={(e) => handleInputChange(e, 'doePrice')}
                aria-label="First name"
              />
              <Form.Control
                type="number"
                value={formValues.clientDoeCount}
                onChange={(e) => handleInputChange(e, 'clientDoeCount')}
                aria-label="Last name"
              />
            </InputGroup>{' '}
            <InputGroup className="mb-3">
              <InputGroup.Text>Buck</InputGroup.Text>
              <Form.Control
                type="number"
                onChange={(e) => handleInputChange(e, 'buckPrice')}
                value={formValues.buckPrice}
                aria-label="First name"
              />
              <Form.Control
                type="number"
                onChange={(e) => handleInputChange(e, 'clientBuckCount')}
                value={formValues.clientBuckCount}
                aria-label="Last name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Kit</InputGroup.Text>
              <Form.Control
                type="number"
                onChange={(e) => handleInputChange(e, 'kitPrice')}
                value={formValues.kitPrice}
                aria-label="First name"
              />
              <Form.Control
                type="number"
                onChange={(e) => handleInputChange(e, 'clientKitCount')}
                value={formValues.clientKitCount}
                aria-label="Last name"
              />
            </InputGroup>{' '}
            <InputGroup className="mb-3">
              <InputGroup.Text>Manure</InputGroup.Text>
              <Form.Control
                type="number"
                onChange={(e) => handleInputChange(e, 'manurePrice')}
                value={formValues.manurePrice}
                aria-label="First name"
              />
              <Form.Control
                type="number"
                onChange={(e) => handleInputChange(e, 'clientManureCount')}
                value={formValues.clientManureCount}
                aria-label="Last name"
              />
            </InputGroup>
            <Button
              variant="primary"
              type="submit"
              onClick={() => createInvoice(formValues, setInvoices)}
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
            <th>NO</th>
            <th>CLIENT</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
            <th colSpan={2}>DOE</th>
            <th colSpan={2}>BUCK</th>
            <th colSpan={2}>KIT</th>
            <th colSpan={2}>MANURE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((item) => (
            <SingleInvoice
              key={item._id}
              clientName={item.clientName}
              clientEmail={item.clientEmail}
              clientNumber={item.clientNumber}
              buckPrice={item.buckPrice}
              clientBuckCount={item.clientBuckCount}
              doePrice={item.doePrice}
              clientDoeCount={item.clientDoeCount}
              clientKitCount={item.clientKitCount}
              clientManureCount={item.clientManureCount}
              kitPrice={item.kitPrice}
              manurePrice={item.manurePrice}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Invoices;
