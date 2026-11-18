import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import imgVainilla from "../assets/Personalizacion/vainilla.png";
import imgChocolate from "../assets/Personalizacion/chocolate.png";
import imgMatcha from "../assets/Personalizacion/image.png";
import imgRedVelvet from "../assets/Personalizacion/red velvet.jpg";
import imgFresa from "../assets/Personalizacion/fresa.jpg";

function Personalizaci() {
  const navigate = useNavigate();

  const [sabor, setSabor] = useState("vainilla");
  const [tamano, setTamano] = useState("14");
  const [relleno, setRelleno] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [decoracion, setDecoracion] = useState("");
  const [fade, setFade] = useState(false);

  const imagenes = {
    vainilla: imgVainilla,
    chocolate: imgChocolate,
    matcha: imgMatcha,
    redvelvet: imgRedVelvet,
    fresa: imgFresa,
  };

  const handleSaborChange = (nuevoSabor) => {
    if (nuevoSabor === sabor) return;
    setFade(true);
    setTimeout(() => {
      setSabor(nuevoSabor);
      setFade(false);
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pedidoPersonalizado = {
      sabor,
      tamano,
      relleno,
      cobertura,
      decoracion,
      img: imagenes[sabor],
    };

    localStorage.setItem("personalizacion", JSON.stringify(pedidoPersonalizado));

    navigate("/pedidos");
  };

  return (
    <>
      <Navbar />
      <form id="pref" onSubmit={handleSubmit}>
        <div className="container-fluid py-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5 col-sm-12 text-center my-4">
              <img
                src={imagenes[sabor]}
                alt="Pastel personalizado"
                className={`img_per img-fluid rounded-4 shadow-sm ${fade ? "fade-out" : "fade-in"}`}
                style={{ maxWidth: "450px", width: "100%" }}
              />
              <br />
              <button
                type="submit"
                className="btn bts text-center fontt-text rounded-3 text-white px-4 py-2 mt-4"
              >
                Confirmar
              </button>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 px-4">
              <h2 className="fontt-text mb-4">Elige tus ingredientes preferidos</h2>

              <h4 className="mt-3">Sabor bizcocho</h4>
              <div
                className="row sabores justify-content-center text-center align-items-center mb-3"
                id="sabor"
              >
                <div className="opcion1 col-auto my-2">
                  <label className="form-label d-flex flex-column align-items-center">
                    <input
                      type="radio"
                      name="sabor"
                      value="chocolate"
                      checked={sabor === "chocolate"}
                      onChange={() => handleSaborChange("chocolate")}
                    />
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="15" fill="#8c5c54ff" />
                    </svg>
                  </label>
                  <div className="nombre">Chocolate</div>
                </div>

                <div className="opcion2 col-auto my-2">
                  <label className="form-label d-flex flex-column align-items-center">
                    <input
                      type="radio"
                      name="sabor"
                      value="matcha"
                      className="iu"
                      checked={sabor === "matcha"}
                      onChange={() => handleSaborChange("matcha")}
                    />
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="15" fill="#77A38E" />
                    </svg>
                  </label>
                  <div className="nombre">Matcha</div>
                </div>

                <div className="opcion3 col-auto my-2">
                  <label className="form-label d-flex flex-column align-items-center">
                    <input
                      type="radio"
                      name="sabor"
                      value="redvelvet"
                      className="iu"
                      checked={sabor === "redvelvet"}
                      onChange={() => handleSaborChange("redvelvet")}
                    />
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="15" fill="#551A2B" />
                    </svg>
                  </label>
                  <div className="nombre">Red Velvet</div>
                </div>

                <div className="opcion4 col-auto my-2">
                  <label className="form-label d-flex flex-column align-items-center">
                    <input
                      type="radio"
                      name="sabor"
                      value="fresa"
                      className="iu"
                      checked={sabor === "fresa"}
                      onChange={() => handleSaborChange("fresa")}
                    />
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="15" fill="#E98A98" />
                    </svg>
                  </label>
                  <div className="nombre">Fresa</div>
                </div>

                <div className="opcion5 col-auto my-2">
                  <label className="form-label d-flex flex-column align-items-center">
                    <input
                      type="radio"
                      name="sabor"
                      value="vainilla"
                      className="iu"
                      checked={sabor === "vainilla"}
                      onChange={() => handleSaborChange("vainilla")}
                    />
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="15" fill="#E8B77B" />
                    </svg>
                  </label>
                  <div className="nombre">Vainilla</div>
                </div>
              </div>

              <h4 className="mt-3">Relleno</h4>
              <input
                type="text"
                id="relleno"
                placeholder="Escribe tu relleno"
                className="entrada justify-content-center text-center align-items-center p-2 mb-3"
                name="rel"
                value={relleno}
                onChange={(e) => setRelleno(e.target.value)}
                required
              />

              <h4 className="mt-3">Tamaño</h4>
              <div
                className="sabores d-flex justify-content-center text-center align-items-center p-2 mb-3 flex-wrap gap-2"
                id="tamano"
              >
                <input
                  type="radio"
                  id="t14"
                  name="tamano"
                  value="14"
                  checked={tamano === "14"}
                  onChange={(e) => setTamano(e.target.value)}
                />
                <label htmlFor="t14" className="opciones form-label py-1 px-3">
                  14 cm
                </label>

                <input
                  type="radio"
                  id="t20"
                  name="tamano"
                  value="20"
                  checked={tamano === "20"}
                  onChange={(e) => setTamano(e.target.value)}
                />
                <label htmlFor="t20" className="opciones form-label py-1 px-3">
                  20 cm
                </label>

                <input
                  type="radio"
                  id="t26"
                  name="tamano"
                  value="26"
                  checked={tamano === "26"}
                  onChange={(e) => setTamano(e.target.value)}
                />
                <label htmlFor="t26" className="opciones form-label py-1 px-3">
                  26 cm
                </label>

                <input
                  type="radio"
                  id="t32"
                  name="tamano"
                  value="32"
                  checked={tamano === "32"}
                  onChange={(e) => setTamano(e.target.value)}
                />
                <label htmlFor="t32" className="opciones form-label py-1 px-3">
                  32 cm
                </label>
              </div>

              <div className="mb-3">
                <h4 className="mt-3">Cobertura</h4>
                <input
                  type="text"
                  id="cobertura"
                  placeholder="Cobertura preferida"
                  className="entrada justify-content-center text-center align-items-center p-2"
                  name="cober"
                  value={cobertura}
                  onChange={(e) => setCobertura(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <h4 className="mt-3">Decoración</h4>
                <input
                  type="text"
                  id="decoracion"
                  placeholder="Decoración preferida"
                  className="entrada justify-content-center text-center align-items-center p-2"
                  name="decor"
                  value={decoracion}
                  onChange={(e) => setDecoracion(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Personalizaci;
