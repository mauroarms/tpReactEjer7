const EmpleadoAvatar = ({ emp}) => {

  return <img key={emp.id} src={emp.pic} alt="foto empleado" className="avatarEmpleado"/>;
};

export default EmpleadoAvatar;
