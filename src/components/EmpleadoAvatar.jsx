const EmpleadoAvatar = ({ empleados }) => {

  return <img src={empleados[0].pic} alt="empleado1" className="avatarEmpleado"/>;
};

export default EmpleadoAvatar;
