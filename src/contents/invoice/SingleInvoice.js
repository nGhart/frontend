import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const SingleInvoice = ({
  clientName,
  clientEmail,
  clientNumber,
  buckPrice,
  clientBuckCount,
  doePrice,
  clientDoeCount,
  kitPrice,
  clientKitCount,
  manurePrice,
  clientManureCount,
}) => {
  return (
    <tr>
      <td>1</td>
      <td>{clientName}</td>
      <td>{clientEmail}</td>
      <td>{clientNumber}</td>
      <td>{doePrice}</td>
      <td>{clientDoeCount}</td>
      <td>{buckPrice}</td>
      <td>{clientBuckCount}</td>
      <td>{kitPrice}</td>
      <td>{clientKitCount}</td>
      <td>{manurePrice}</td>
      <td>{clientManureCount}</td>
      <td>
        <button>update</button>
        <button>delete</button>
      </td>
    </tr>
  );
};

export default SingleInvoice;
