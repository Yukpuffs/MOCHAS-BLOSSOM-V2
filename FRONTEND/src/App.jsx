import { Routes, Route } from "react-router-dom";

import Principal from "./pages/pag_principal";
import Menu from "./pages/Menu";
import Inicio from "./pages/iniciosesion";
import Registro from "./pages/registro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default App;