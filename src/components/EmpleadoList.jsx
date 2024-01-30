import React from "react";
import EmpleadoRow from "./EmpleadoRow";
import ListGroup from 'react-bootstrap/ListGroup';

const EmpleadoList = ({ empleados }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <EmpleadoRow empleados={empleados}></EmpleadoRow>
      </ListGroup.Item>
      <ListGroup.Item>
        <EmpleadoRow empleados={empleados}></EmpleadoRow>
      </ListGroup.Item>
      <ListGroup.Item>
        <EmpleadoRow empleados={empleados}></EmpleadoRow>
      </ListGroup.Item>
      <ListGroup.Item>
        <EmpleadoRow empleados={empleados}></EmpleadoRow>
      </ListGroup.Item>
      <ListGroup.Item>
        <EmpleadoRow empleados={empleados}></EmpleadoRow>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default EmpleadoList;
