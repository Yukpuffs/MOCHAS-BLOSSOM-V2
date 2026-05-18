import Navbar from "./components/navbar.jsx";
import Menu from "./pages/Menu";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Navbar/>
      <Menu agregarAlCarrito={agregarAlCarrito}/>
    </>
  );
}

export default App;