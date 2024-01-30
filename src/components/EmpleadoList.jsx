import React from "react";
import EmpleadoRow from "./EmpleadoRow";
import ListGroup from 'react-bootstrap/ListGroup';

const EmpleadoList = ({ empleados }) => {
  return (
    <ListGroup>
      {empleados.map((emp, i) => (
        <ListGroup.Item key={i}>
          <EmpleadoRow emp={emp}></EmpleadoRow>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default EmpleadoList;
