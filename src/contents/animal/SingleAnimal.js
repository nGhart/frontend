import React, { useState } from 'react';
import animalStore from '../../stores/store';
import './animal.css';

const SingleAnimal = ({ item, props }) => {
  const store = animalStore((store) => {
    return { editAnimal: store.editAnimal, deleteAnimal: store.deleteAnimal };
  });

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
            <button className="actionIcons">
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
