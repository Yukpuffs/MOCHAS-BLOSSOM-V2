import neko from "../assets/botones/neko.png";
import postre from "../assets/Decoraciones/postre.png";
import Boton from "../components/Botones";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";


function Principal() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row align-items-center my-4 my-md-5 justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="curved-title-container">
                <svg viewBox="0 0 700 200" className="w-100 h-auto">
                    <defs>
                    <path
                        id="welcome-arc"
                        d="M 50,150 A 300,120 0 0,1 650,150"
                        fill="none"
                    />
                    </defs>
                    <text className="bann-curved">
                    <textPath href="#welcome-arc" startOffset="50%" textAnchor="middle">
                        Welcome to Mocha's Blossom
                    </textPath>
                    </text>
                </svg>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-4 text-center mt-3 flex-wrap">
              <div className="d-flex flex-column align-items-center">
                <img src={neko} alt="gato" width="30" className="mb-2" />
                <Boton
                  Texto="Iniciar sesión"
                  accion={() => navigate("/inicio")}
                  className="bt_ingreso"
                />
              </div>

              <div className="d-flex flex-column align-items-center">
                <img src={neko} alt="gato" width="30" className="mb-2" />
                <Boton
                  Texto="Registrarse"
                  accion={() => navigate("/registro")}
                  className="bt_ingreso"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img
              src={postre}
              alt="Postre"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "500px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Principal;
