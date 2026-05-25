import usuario from "../assets/usuario/capi.png"
import edit from "../assets/botones/edit.png"
import deseos from "../assets/botones/cora.png"
import compras from "../assets/botones/shop.png"

import Boton from "../components/Botones"
import Navbar from "../components/navbar";
import { useEditarFormulario } from '../../Hooks/main';


function FormularioCuenta() {
  
  return (
    <>
    <Navbar />
    <form id="usuario">
      <div className="container-fluid m-4" id="form">
        <div className="row">
          <div className="justify-content-start col-lg-3 col-md-3 col-sm-12 text-center">
            <img src={usuario} className="img-fluid" alt="usuario" width="100px" />
          </div>
          <div className="justify-content-start col-lg-1 col-md-1 col-sm-12 text-center">
            <p id="user_name">User name <button className="bg-transparent border-0 rounded" id="botoni" type="button">
              <img src={edit} width="20px" alt="editar" />
            </button></p>
            <p><strong>ID USER ######</strong></p>
          </div>
          <div className="justify-content-center col-lg-4 col-md-3 col-sm-12 text-center">
            <a href="listadeseos.html" className="text-white text-decoration-none"><img src={deseos} alt="deseos" width="30" /></a>
            <p>Lista de deseos</p>
          </div>
          <div className="justify-content-center col-lg-4 col-md-3 col-sm-12 text-center">
            <a href="carritoo.html" className="text-white text-decoration-none"><img src={compras} alt="carrito" width="30" /></a>
            <p>Mi carrito</p>
          </div>
        </div>
        <div className="row" id="usuarioo">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
            <h1 className="fs-5">Datos Personales <button className="bg-transparent border-0 rounded" id="boton-aper" type="button"  onClick={useEditarFormulario}>
              <img src={edit} width="20px" alt="editar" />
            </button></h1>
            <div className="m-4">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" className="entrada inp_pedi" required disabled />
            </div>
            <div className="m-4">
              <label htmlFor="corre_E">Correo Electronico</label>
              <input type="email" name="corre_E" id="corre_E" className="entrada inp_pedi" required autoComplete="email" disabled />
            </div>
            <div className="m-4">
              <label htmlFor="telefono">Telefono</label>
              <input type="text" name="telefono" id="telefono" className="entrada inp_pedi" required disabled />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
            <div className="m-4">
              <label htmlFor="direccion">Direccion</label>
              <input type="text" name="direccion" id="direccion" className="entrada inp_pedi" required disabled />
            </div>
            <div className="m-4">
              <label htmlFor="tarj">Numero Tarjeta</label>
              <input type="text" name="num_tarj" id="tarj" className="entrada inp_pedi" required disabled maxLength="10" />
            </div>
            <Boton
            Texto="Guardar Cambios"
          />
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default FormularioCuenta;