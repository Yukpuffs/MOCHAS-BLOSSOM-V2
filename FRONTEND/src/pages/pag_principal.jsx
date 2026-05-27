import neko from "../assets/botones/neko.png";
import Boton from "../components/Botones";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function Principal() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                        <iframe
                            src="https://www.youtube.com/embed/Q9BQiZe_wpM?list=RDQ9BQiZe_wpM"
                            className="video"
                            width="100%"
                            height="400"
                            title="Video principal"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 fontt-text">
                <div className="row justify-content-center text-center">

                    <div className="col-lg-3 col-md-4 col-sm-10 mb-4">
                        <img src={neko} alt="gato" width="30" />
                        <br />

                        <Boton
                            Texto="Iniciar sesión"
                            accion={() => navigate("/inicio")}
                        />
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-10 mb-4">
                        <img src={neko} alt="gato" width="30" />
                        <br />

                        <Boton
                            Texto="Registrarse"
                            accion={() => navigate("/registro")}
                        />
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Principal;