import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';

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
            <Link to="disease">Disease</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="buck">Quarantine</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="mating">Vaccination</Link>
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
