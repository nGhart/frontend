import React, { useState } from 'react';
import contactStore from '../../stores/contactStore';
import EditContact from './EditContact';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const SingleContact = ({ item }) => {
  const store = contactStore((store) => {
    return {
      editContact: store.editContact,
      deleteContact: store.deleteContact,
    };
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr key={item._id}>
        <td></td>
        <td>{item.contactName}</td>
        <td>{item.contactNumber}</td>
        <td>{item.contactEmail}</td>
        <td>{item.contactGroup}</td>

        <td>
          <div className="around actionIcons">
            <button
              className="actionIcons"
              onClick={handleShow}
              //onClick={() => store.editContact(item)}
            >
              <i className="fas fa-edit"></i>
            </button>

            <button
              className="actionIcons"
              onClick={() => store.deleteContact(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <EditContact item={item} handleClose={handleClose} />
      </Modal> */}

      {/* <Modal
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
         
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default SingleContact;
