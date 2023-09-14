import React, { useState } from 'react';
import contactStore from '../../stores/contactStore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditContact = () => {
  const store = contactStore();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = React.useState(false);
  return (
    <div>
      {store.updateFormContact._id && (
        <section className="">
          <Modal
            show={true} // Show the modal directly within this component
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={store.updateContact}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactName"
                    onChange={store.handleUpdateContact}
                    value={store.updateFormContact.contactName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="contactEmail"
                    onChange={store.handleUpdateContact}
                    value={store.updateFormContact.contactEmail}
                  />
                  <Form.Text className="text-muted">Optional</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactNumber">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactNumber"
                    onChange={store.handleUpdateContact}
                    value={store.updateFormContact.contactNumber}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactGroup">
                  <Form.Label>Contact Group</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactGroup"
                    onChange={store.handleUpdateContact}
                    value={store.updateFormContact.contactGroup}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </section>
      )}
    </div>
  );
};

export default EditContact;
