import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animalStore from '../../stores/store';

const DisplayAnimal = () => {
  const store = animalStore();

  return (
    <div>
      <Row>
        <h1>Rabbit Profile</h1>
        <Col xs={6}>
          <img src="" alt="Profile" width="100%" />
        </Col>
        <Col xs={6}>
          <h4 className="profileText">ID</h4>
          <h4 className="profileText">Sex</h4>
          <h4 className="profileText">Breed</h4>
          <h4 className="profileText">DATE OF BIRTH</h4>
          <h4 className="profileText">BRED/BOUGHT</h4>
          <h4 className="profileText">PARENTS</h4>
          <h5 className="profileSubtextParents">Dame</h5>
          <h5 className="profileSubtextParents">Sire</h5>
          <h5 className="profileSubtextParents">Grand Dame</h5>
          <h5 className="profileSubtextParents">Grand Sire</h5>
          <h4 className="profileText">WEANING</h4>
          <h4 className="profileText">WEIGHT</h4>
          <h5 className="profileSubtextWeight">At Birth</h5>
          <h5 className="profileSubtextWeight">At Weaning</h5>
          <h5 className="profileSubtextWeight">At 8W</h5>
          <h5 className="profileSubtextWeight">Current</h5>
          <h5 className="profileSubtextWeight">At Sale</h5>
          <h4 className="profileText">FERTILITY</h4>
          <h5 className="profileSubtextFertility">Age at First Service</h5>
          <h5 className="profileSubtextFertility">Number of Services</h5>
          <h5 className="profileSubtextFertility">Number of Litters</h5>
          <h4 className="profileText">LITTER</h4>
          <h5 className="profileSubtextFertility">Number of Kits</h5>
          <h5 className="profileSubtextFertility">Number of Kits Alive</h5>
          <h5 className="profileSubtextFertility">Number of Kits Dead</h5>
          <h5 className="profileSubtextFertility">Number Sold</h5>
          <h5 className="profileSubtextFertility">Number Butchered</h5>
        </Col>
      </Row>
    </div>
  );
};

export default DisplayAnimal;
