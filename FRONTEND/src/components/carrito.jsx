import { useCarrito } from '../../Hooks/main.jsx';

function Carrito() {
  const { carrito, sumar, restar, eliminarDelCarrito } = useCarrito();

  return (
    <div id="carrito" className="container">
      <div className="row">
        {carrito.map((producto, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-6 cardd pb-3">
            <div className="card h-20 par">
              <img src={producto.img} className="card-img-top img-fluid" alt={producto.tipo} />
              <div className="card-body">
                <h5>{producto.tipo}</h5>
                <p>{producto.descripcion}</p>
                <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                <div className="controles">
                  <button 
                    className="restar border-0 rounded btn bts"
                    onClick={() => restar(index)}
                  >
                    -
                  </button>
                  <span className="cantidad">{producto.cantidad}</span>
                  <button 
                    className="sumar border-0 rounded btn bts"
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