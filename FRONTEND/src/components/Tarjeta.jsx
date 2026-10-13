import "../index.css";
import Boton from "./Botones.jsx";
import {useCarrito} from "../../Hooks/funciones.jsx"

function Card({ titulo, descripcion, imagen, cantidad, agregarAlCarrito: propAgregarAlCarrito }) {
  const { agregarAlCarrito: hookAgregarAlCarrito } = useCarrito();
  const handleAgregar = propAgregarAlCarrito || hookAgregarAlCarrito;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
      <div className="card h-100 p-3 border-0 text-center cardd w-100 menu-card">
        <div className="par d-flex flex-column h-100 justify-content-between w-100">
          <div>
            <img
              src={imagen}
              className="card-img-top img-fluid mx-auto mb-3"
              alt={titulo}
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <div className="card-body p-0">
              <h5 className="card-title fw-bold" style={{ color: "#5e3023" }}>{titulo}</h5>
              <p className="card-text text-muted" style={{ fontSize: "14px" }}>{descripcion}</p>
            </div>
          </div>

          <div className="mt-3">
            <Boton
              Texto="Agregar"
              accion={() =>
                handleAgregar({ 
                  tipo: titulo,
                  descripcion: descripcion,
                  img: imagen,
                  cantidad: 1
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card;