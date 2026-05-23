import "../index.css";
import Boton from "./Botones.jsx";
import {useCarrito} from "../../Hooks/funciones.jsx"

function Card({ titulo, descripcion, imagen, cantidad }) {
  const { agregarAlCarrito } = useCarrito();
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
              agregarAlCarrito({ 
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
  );
}


export default Card;