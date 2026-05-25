import { Routes, Route } from "react-router-dom";

import Principal from "./pages/pag_principal";
import Menu from "./pages/Menu";
import Inicio from "./pages/iniciosesion";
import Registro from "./pages/registro";
import Carrito from "./pages/Carrit";
import Cuenta from "./pages/Cuenta"
import Nosotros from "./pages/nosotros"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/cuenta" element={<Cuenta/>} />
      <Route path="/nosotros" element={<Nosotros/>}/>
    </Routes>
  );
}

export default App;