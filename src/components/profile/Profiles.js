import React from 'react';
import SingleProfile from './SingleProfile';
import Table from 'react-bootstrap/Table';
import profileStore from '../../stores/profileStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Profiles = () => {
  const store = profileStore();

  return (
    <Container>
      <Row>
        {store.profiles &&
          store.profiles.map((item, index) => {
            return <SingleProfile index={index} item={item} key={item._id} />;
          })}
      </Row>
    </Container>
  );
};

export default Profiles;
