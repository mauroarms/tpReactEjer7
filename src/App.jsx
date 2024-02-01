import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import EmpleadoList from "./components/EmpleadoList";
import empleados from "./arrayEmpleados";

function App() {
  return (
    <>
      <Container className="contenido">
        <div className="listaEmpleados">
          <EmpleadoList empleados={empleados}></EmpleadoList>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
