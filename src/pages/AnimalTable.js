import React, { useEffect, useState } from 'react';
import animalStore from '../stores/store';
import Animals from '../components/animal/Animals';
import EditAnimal from '../components/animal/EditAnimal';
import AddAnimal from '../components/animal/AddAnimal';
import '../components/animal/animal.css';

const AnimalTable = () => {
  const store = animalStore();

  useEffect(() => {
    store.getAnimals();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const showAnimalDetails = (animal) => {
    setSelectedAnimal(animal);
  };
  return (
    <>
      <h1 className="font6" style={{ margin: 0, padding: 0 }}>
        Animal Records
      </h1>
      <AddAnimal />
      <Animals />
      <EditAnimal />

      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {selectedAnimal && (
          <div className="animal-details">
            <h2>Animal Details</h2>

            <p>Name: {selectedAnimal.name}</p>
            <p>Breed: {selectedAnimal.breed}</p>
            <button onClick={() => setSelectedAnimal(null)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AnimalTable;
