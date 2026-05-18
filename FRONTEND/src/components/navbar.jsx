// Navbar.jsx
import logo from "../assets/logo/Mocha_s_blossom-removebg-preview.png"
import usuario from "../assets/usuario/bas.png"
import carrito from "../assets/botones/shop.png"
import "../index.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <img
            className="navbar-brand align-items-center"
            src={logo}
            width="100px"
            alt="logo"
          />

          <div id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2">

              <li className="nav-item fontt-text">
                <Link className="nav-link active" to="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item fontt-text">
                <Link className="nav-link" to="/personalizacion">
                  Personalización
                </Link>
              </li>

              <li className="nav-item fontt-text">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>

              <Link
                to="/carrito"
                className="list-group-item list-group-item-action"
              >
                <img
                  className="navbar-item"
                  src={carrito}
                  width="40px"
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