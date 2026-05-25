import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function FormularioAuth({
  titulo,
  subtituloKR,
  subtituloES,
  campos,
  textoBoton,
  textoInferior,
  textoLink,
  ruta,
  imagen,
  logo,
  endpoint,
}) {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    const formData = new FormData(e.currentTarget);
    const datos = Object.fromEntries(formData.entries());

    if (datos.password) {
      datos.contraseña = datos.password;
      delete datos.password;
    }

    try {
      const res = await api.post(endpoint, datos);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      setMensaje(res.data.msg || "Operación exitosa");

      if (endpoint === "/auth/login") {
        navigate("/cuenta");
      }

      if (endpoint === "/auth/registro") {
        navigate("/inicio");
      }
    } catch (err) {
      setError(
        err.response?.data?.msg ||
          err.response?.data?.error ||
          "No se pudo completar la operación"
      );
    }
  };

return (
    <main className="auth-page">
        <section className="auth-presentacion">
        <div className="comfort-header">
        {logo && <img className="mc" src={logo} alt="Logo" width="100" />}
        <h1 className="comfort-title">{titulo}</h1>
        <p className="gentle-subtitle">
            {subtituloKR} <br /> {subtituloES}
        </p>
        {imagen && <img className="pst mt-5" src={imagen} alt="brownie" />}
        </div>
    </section>

    <section className="auth-formulario">
        <div className="soft-card">
        <form>
            {campos.map((campo, index) => (
            <div className="soft-field" key={index}>
                <div className="field-container">
                    <input
                    type={campo.tipo}
                    id={campo.id}
                    placeholder={campo.placeholder}
                    required
                    />
                    <label htmlFor={campo.id}>{campo.label}</label>
                </div>
            </div>
            ))}

            <button className="comfort-button" type="submit">
                {textoBoton}
            </button>
        </form>

        <div className="comfort-signup">
            <span>{textoInferior}</span>
            <Link to={ruta} className="comfort-link signup-link">
                {textoLink}
            </Link>
        </div>
    </div>
    </section>
</main>
);
}

export default FormularioAuth;