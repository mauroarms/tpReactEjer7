import empleado01 from "../assets/empleado01.png"
import empleado02 from "../assets/empleado02.png"
import empleado03 from "../assets/empleado03.png"
import empleado04 from "../assets/empleado04.png"
import empleado05 from "../assets/empleado05.png"
import empleado06 from "../assets/empleado06.png"
import empleado07 from "../assets/empleado07.png"
import empleado08 from "../assets/empleado08.png"
import empleado09 from "../assets/empleado09.png"


const EmpleadoAvatar = ({ emp}) => {

  const arrayImg = [
    empleado01,
    empleado02, 
    empleado03,
    empleado04,
    empleado05,
    empleado06,
    empleado07,
    empleado08,
    empleado09,
  ]


  return <img src={arrayImg[emp.id]} alt={emp.id} className="avatarEmpleado"/>;
};

export default EmpleadoAvatar;
