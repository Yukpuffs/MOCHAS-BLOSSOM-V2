import "../index.css";
import Boton from "./Botones.jsx";

function Card({ imagen, titulo, descripcion, agregarAlCarrito }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <div className="par">

        <img
          src={imagen}
          className="img-fluid"
          alt={titulo}
        />

        <div className="card-body">
          <h5>{titulo}</h5>

          <p>{descripcion}</p>

          <Boton
            Texto="Agregar"
            accion={() =>
              agregarAlCarrito({ tipo: titulo })
            }
          />

        </div>
      </div>
    </div>
  );
}


export default Card;