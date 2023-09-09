import React, { useState } from 'react';
import animalStore from '../../stores/store';
import Table from 'react-bootstrap/Table';
import SingleAnimal from './SingleAnimal';

const Animals = () => {
  const store = animalStore();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  return (
    <div>
      <h1 className="font6">Animal Records</h1>
      {selectedAnimal && (
        <div className="animal-details">
          <h2>Animal Details</h2>
          <p>Name: {selectedAnimal.name}</p>
          <p>Breed: {selectedAnimal.breed}</p>
          {/* Include other properties here */}
          <button onClick={() => setSelectedAnimal(null)}>Close</button>
        </div>
      )}
      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>BREED</th>
            <th>SEX</th>
            <th>BRED</th>
            <th>DOB</th>
            <th>AGE</th>
            <th>WEANED</th>
            <th>WEIGHT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.animals &&
            store.animals.map((item) => {
              return <SingleAnimal item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Animals;
