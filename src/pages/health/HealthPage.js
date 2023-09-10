import React from 'react';
import Nav from 'react-bootstrap/Nav';

const HealthPage = () => {
  return (
    <>
      <div style={{}}>
        <h1>Breeding Records</h1>
        <Nav
          justify
          variant="tabs"
          defaultActiveKey="doe"
          className="justify-content"
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
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HealthPage;
