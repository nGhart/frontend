import Table from 'react-bootstrap/Table';
import React from 'react';
import AddDisease from './AddDisease';

const DiseaseList = () => {
  return (
    <div>
      <AddDisease />
      DiseaseList
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>DATE</th>
            <th>ID</th>
            <th>CONDITION</th>
            <th>MANAGEMENT</th>
            <th>DURATION</th>
            <th>OUTCOME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DiseaseList;
