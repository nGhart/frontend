import React, { useEffect } from 'react';
import animalStore from '../stores/store';
import Animals from '../components/Animals';
import EditAnimal from '../components/EditAnimal';
import AddAnimal from '../components/AddAnimal';

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

// const getAnimals = async () => {
//   const response = await axios.get('http://localhost:1994/animals');
//   setAnimals(response.data.animals);
// };
