import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./app.css";
import Footer from "./components/Footer";
import EmpleadoList from "./components/EmpleadoList";
import empleadosModif from "./arrayEmpleados";

function App() {
  return (
    <>
      <Container className="contenido">
        <div className="listaEmpleados">
          <EmpleadoList empleados={empleadosModif}></EmpleadoList>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
