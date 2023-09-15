import React, { useEffect, useState } from 'react';
import animalStore from '../stores/store';
import Animals from '../contents/animal/Animals';
import AddAnimal from '../contents/animal/AddAnimal';
import '../contents/animal/animal.css';
import EditAnimal from '../contents/animal/EditAnimal';

const AnimalTable = () => {
  const store = animalStore();

  useEffect(() => {
    store.getAnimals();
  }, []);

  return (
    <>
      <h1 className="font6" style={{ margin: 0, padding: 0 }}>
        Animal Records
      </h1>
      <EditAnimal />
      <AddAnimal />
      <Animals />

      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      ></div>
    </>
  );
};

export default AnimalTable;
