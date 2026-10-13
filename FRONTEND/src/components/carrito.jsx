import { useCarrito } from '../../Hooks/funciones.jsx';

function Carrito() {
  const { carrito, sumar, restar, eliminarDelCarrito } = useCarrito();

  return (
    <div id="carrito" className="container">
      <div className="row">
        {carrito.map((producto, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card h-100 p-3 border-0 text-center cardd w-100 menu-card par">
              <img src={producto.img} className="card-img-top img-fluid mx-auto mb-3" alt={producto.tipo} />
              <div className="card-body">
                <h5>{producto.tipo}</h5>
                <p>{producto.descripcion}</p>
                <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                <div className="controles">
                  <button 
                    className="restar border-0 rounded btn bts text-white me-3"
                    onClick={() => restar(index)}
                  >
                    -
                  </button>
                  <span className="cantidad">{producto.cantidad}</span>
                  <button 
                    className="sumar border-0 rounded btn bts text-white ms-3"
                    onClick={() => sumar(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;