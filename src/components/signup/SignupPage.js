import React from 'react';
import SignupForm from './SignupForm';
import './signup.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SignupPage = () => {
  return (
    <Container fluid className="startPage">
      <Row>
        <Col xs={12} sm={12} md={8} className="startImage">
          <h1 className="font5">Rabbit Records</h1>
          <span>
            Photo by
            <a href="https://unsplash.com/@shichijiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Wei Fukuyama
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/Rr9K_FR-0-w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </Col>
        <Col
          xs={12}
          // xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 3 }}
          md={4}
          className="signForm font1"
        >
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
