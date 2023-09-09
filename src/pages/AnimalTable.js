import React, { useEffect } from 'react';
import animalStore from '../stores/store';
import Animals from '../components/animal/Animals';
import EditAnimal from '../components/animal/EditAnimal';
import AddAnimal from '../components/animal/AddAnimal';

const AnimalTable = () => {
  const store = animalStore();

  useEffect(() => {
    store.getAnimals();
  }, []);

  return (
    <>
      <Animals />
      <EditAnimal />
      <AddAnimal />
    </>
  );
};

export default AnimalTable;
