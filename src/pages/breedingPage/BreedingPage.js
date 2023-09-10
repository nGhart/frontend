import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import DoePage from '../doePage/DoePage';
import BuckPage from '../buckPage/BuckPage';
import MatingPage from '../matingPage/MatingPage';

const BreedingPage = () => {
  return (
    <div style={{}}>
      <h1>Breeding Records</h1>
      <DoePage />
      <BuckPage />
      <MatingPage />
      <Nav
        variant="tabs"
        defaultActiveKey="doe"
        className="justify-content-center"
      >
        <Nav.Item>
          <Link to="doe">Doe</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="buck">Buck</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="mating">Mating</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default BreedingPage;

{
  //import Container from 'react-bootstrap/Container';
  // import Row from 'react-bootstrap/Row';
  // import Col from 'react-bootstrap/Col';
  // import Stack from 'react-bootstrap/Stack';
  // import Loading from '../../components/Loading';
  // const [loading, setLoading] = useState(true);
  // const [errorPage, setErrorPage] = useState(false);
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return;
  // }
  /* <Container
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
      </Container> */
}
