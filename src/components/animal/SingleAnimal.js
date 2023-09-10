import React, { useState } from 'react';
import animalStore from '../../stores/store';
import './animal.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SingleAnimal = ({ item, props }) => {
  const store = animalStore((store) => {
    return { editAnimal: store.editAnimal, deleteAnimal: store.deleteAnimal };
  });
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const showAnimalDetails = (animal) => {
    setSelectedAnimal(animal);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.breed}</td>
        <td>{item.sex}</td>
        <td>{item.bred}</td>
        <td>{item.dob}</td>
        <td>Calc</td>
        <td>{item.weaning}</td>
        <td>{item.weightCurrent}</td>
        <td>
          <div className="around actionIcons">
            <button
              className="actionIcons"
              onClick={() => showAnimalDetails(item)}
            >
              <i className="fas fa-eye"></i>
            </button>

            <button
              className="actionIcons"
              onClick={() => store.editAnimal(item)}
            >
              <i className="fas fa-edit"></i>
            </button>

            <button
              className="actionIcons"
              onClick={() => store.deleteAnimal(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SingleAnimal;
