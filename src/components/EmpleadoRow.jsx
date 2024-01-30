import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ emp }) => {
  return (
    <div className="rowEmpleados ">
      <EmpleadoAvatar empleadoFoto={emp.pic}></EmpleadoAvatar>
      <div className="datosEmpleados">
        <h3>{emp.fullName}</h3>
        <div className="infoEmpleado">
          <span className="badge text-bg-primary me-3">{emp.title}</span>

          <span className="badge text-bg-info">{emp.department}</span>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoRow;
