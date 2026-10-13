// Navbar.jsx
import logo from "../assets/logo/Mocha_s_blossom-removebg-preview.png"
import usuario from "../assets/usuario/bas.png"
import carrito from "../assets/botones/carrito.png"
import { Link } from "react-router-dom"
import "../index.css";

function Navbar() {
  return (
    <>
    <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="navbar-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 
                    L 1,0 
                    L 1,0.80 
                    C 0.9,1.05 0.8,0.65 0.7,0.85 
                    C 0.6,1.05 0.5,0.65 0.4,0.85 
                    C 0.3,1.05 0.2,0.65 0.1,0.85 
                    C 0.05,0.95 0.02,0.80 0,0.85 
                    Z" />
          </clipPath>
        </defs>
      </svg>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="navbar-wave-bg" />
        <div className="container-fluid formita">
          <img
            className="navbar-brand align-items-center ms-5"
            src={logo}
            width="100px"
            alt="logo"
          />

          <div id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 titulo">
              <li className="nav-item titulo mt-4 me-5">
                <Link className="nav-link active" to="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item titulo mt-4 me-5">
                <Link className="nav-link" to="/personalizacion">
                  Personalización
                </Link>
              </li>

              <li className="nav-item titulo mt-4 me-5">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>

              <Link to="/carrito" className="list-group-item list-group-item-action ">
                <img
                  className="navbar-item mt-4 me-5"
                  src={carrito}
                  width="30px"
                  alt="carrito"
                />
              </Link>
            </ul>
          </div>

          <div className="listaus dropdown">

            <button
              className="btnusuario border-0 rounded-circle dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-display="static"
            >
              <img
                className="usuario"
                src={usuario}
                alt="Usuario"
                width="50px"
              />
            </button>

            <div className="dropdown-menu dropdown-menu-end fontt-text">

              <Link className="dropdown-item text-white" to="/cuenta">
                Mi cuenta
              </Link>

              <Link className="dropdown-item text-white" to="/carrito">
                Carrito
              </Link>

              <Link className="dropdown-item text-white" to="/pedidos">
                Pedidos
              </Link>

              <Link className="dropdown-item text-white" to="/deseos">
                Lista de deseos
              </Link>

              <Link className="dropdown-item text-white" to="/configuracion">
                Configuración
              </Link>

            </div>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;