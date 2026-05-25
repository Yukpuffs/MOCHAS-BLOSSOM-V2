import neko from "../assets/botones/neko.png";
import Boton from "../components/Botones";
import Navbar from "../components/navbar";

function Principal() {
    return (
        <>
        <Navbar></Navbar>
            <div className="container-fluid row mt-5 justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-4 justify-content-center offset-sm-0 offset-lg-1">
                    <iframe src="https://www.youtube.com/embed/Q9BQiZe_wpM?list=RDQ9BQiZe_wpM" className="video" height="400" width="1000" title="Video principal"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                </div>
            </div>

            <div className="container-fluid row mt-5 justify-content-center fontt-text">
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                    <img src={neko} alt="gato" width="30"/><br />

                    <Boton
                        Texto="Iniciar sesión"
                        accion={() =>
                        agregarAlCarrito({ tipo: titulo })
                        }
                    />
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1"></div>

                <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                    <img src={neko} alt="gato" width="30"/><br />

                    <Boton
                        Texto="Registrarse"
                        accion={() =>
                        agregarAlCarrito({ tipo: titulo })
                        }
                    />

                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>

            </div>
        </>
    );
}

export default Principal;