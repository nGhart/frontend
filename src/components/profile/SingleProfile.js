import React, { useState } from 'react';
import profileStore from '../../stores/profileStore';
import EditProfile from './EditProfile';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SingleProfile = ({ item, index }) => {
  const store = profileStore((store) => {
    return {
      editProfile: store.editProfile,
      deleteProfile: store.deleteProfile,
      handleUpdateProfile: store.handleUpdateProfile,
      updateProfile: store.updateProfile,
      updateFormProfile: store.updateFormProfile,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editProfile(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Row key={item._id}>
        <Col>
          <img src={item.logo} alt="Logo" />
        </Col>
        <Col>
          <h3>{item.name}</h3>
          <h3>{item.email}</h3>
          <h3>{item.number1}</h3>
          <h3>{item.number2}</h3>
          <h3>{item.building}</h3>
          <h3>{item.street}</h3>
          <h3>{item.city}</h3>
          <h3>{item.country}</h3>
        </Col>
        <Row>
          <div className="formButtonsContainer">
            <button className="formButtons" onClick={handleOpenModal}>
              Update Profile
            </button>
            {/* <button
              className="actionIcons"
              onClick={() => store.deleteProfile(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button> */}
          </div>
        </Row>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfile
            updateProfile={store.updateProfile}
            handleUpdateProfile={store.handleUpdateProfile}
            updateFormProfile={store.updateFormProfile}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleProfile;
