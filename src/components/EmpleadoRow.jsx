import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleados }) => {
  return (
    <div className="rowEmpleados ">
      <EmpleadoAvatar empleados={empleados}></EmpleadoAvatar>

      <div className="datosEmpleados">
        <h3>{empleados[0].fullName}</h3>
        <div className="infoEmpleado">
          <span className="badge text-bg-primary">{empleados[0].title}</span>

          <span className="badge text-bg-info">{empleados[0].department}</span>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoRow;
