import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const BreedingPage = () => {
  return (
    <>
      <h1>Breeding pAge</h1>
      {/* <Container
        style={{
          marginTop: '50px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Reminders</h1>
        <Row
          style={{
            margin: 'auto',
          }}
        >
          <Col sm={{ span: 6, offset: 3 }}>
            <Stack gap={2} className="col-md-12 mx-auto">
              <Row>
                <AddReminder newReminder={addReminder} />
              </Row>
            </Stack>
          </Col>
        </Row>
        <div>
          <Stack
            gap={2}
            className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mx-auto"
          >
            <Reminders
              usersData={users}
              deleteReminder={deleteReminder}
              editReminder={editReminder}
            />
          </Stack>
        </div>
      </Container> */}
    </>
  );
};

export default BreedingPage;
