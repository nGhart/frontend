import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import profileStore from '../../stores/profileStore';
import Col from 'react-bootstrap/Col';

const AddProfile = () => {
  const store = profileStore();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageLoading, setImageLoading] = useState(false);
  const [logo, setLogo] = useState(
    'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  );
  const [logoMessage, setLogoMessage] = useState('');
  const postDetails = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return setLogoMessage('Upload image');
    }
    setLogoMessage(null);

    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      try {
        setImageLoading(true);

        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'rabbitRecords');
        data.append('cloud_name', 'dquz47ysg');

        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dquz47ysg/image/upload',
          {
            method: 'POST',
            body: data,
          }
        );

        if (!response.ok) {
          throw new Error('Failed to upload image to Cloudinary');
        }

        const imageData = await response.json();
        console.log(imageData);

        setLogo(imageData.secure_url);
      } catch (error) {
        console.error('Image Upload Error:', error);
        setLogoMessage('Image upload failed');
      } finally {
        setImageLoading(false);
      }
    } else {
      setLogoMessage('Upload a .png or .jpeg file');
    }
  };
  return (
    <>
      <button className="addButtons" onClick={handleShow}>
        Add Profile
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={store.handleAddProfile}>
            <Form.Group>
              <Form.Label>Name *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateProfiles}
                type="text"
                name="name"
                value={store.createProfile.name}
              />
            </Form.Group>
            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="email"
                  name="email"
                  value={store.createProfile.email}
                />
              </Form.Group>
            </Col>
            <Col className="box1">
              <Form.Group className="mb-1 " controlId="formBasicNumber">
                <Form.Label>Number 1</Form.Label>
                <Form.Control
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="number1"
                  value={store.createProfile.number1}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicNumber">
                <Form.Label>Number 2</Form.Label>
                <Form.Control
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="number2"
                  value={store.createProfile.number2}
                />
                <Form.Text>Optional</Form.Text>
              </Form.Group>
            </Col>
            <Form.Group className="mb-1  box1" controlId="formBasicEmail">
              <Form.Label>Building Address</Form.Label>
              <Form.Control
                onChange={store.updateCreateProfiles}
                type="text"
                name="building"
                value={store.createProfile.building}
              />
            </Form.Group>
            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Street Name *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="street"
                  value={store.createProfile.street}
                />
              </Form.Group>
            </Col>
            <Col className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>City *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="city"
                  value={store.createProfile.city}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Country *</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateCreateProfiles}
                  type="text"
                  name="country"
                  value={store.createProfile.country}
                />
              </Form.Group>
            </Col>
            {/* <Form.Group className="mb-1 box1" controlId="formBasicEmail">
              <Form.Label>Logo *</Form.Label>
              <Form.Control
                required
                onChange={store.updateCreateProfiles}
                type="text"
                name="logo"
                value={store.createProfile.logo}
              />
            </Form.Group> */}
            {/* <Form.Group className="position-relative mb-3" controlId="logo">
              <Form.Label>Upload logo</Form.Label>
              <Form.Control
                type="file"
                name="logo"
                onChange={postDetails}
                // isInvalid={!!errors.file}
                value={logo}
              />

              {logoMessage}
            </Form.Group> */}

            <Form.Group className="position-relative mb-3" controlId="logo">
              <Form.Label>Upload logo</Form.Label>
              <Form.Control type="file" name="logo" onChange={postDetails} />
              {logoMessage}
            </Form.Group>

            <div className="formButtonsContainer">
              <button className="formButtons" type="submit">
                Add Profile
              </button>
              <button
                type="button"
                className="formButtons"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProfile;
