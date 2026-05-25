import usuario from "../assets/usuario/capi.png";
import edit from "../assets/botones/edit.png";
import deseos from "../assets/botones/cora.png";
import compras from "../assets/botones/shop.png";

import Navbar from "../components/navbar";

import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";


function FormularioCuenta() {
  const [editando, setEditando] = useState(false);
  const [userId, setUserId] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const [datos, setDatos] = useState({
    usuario: "",
    email: "",
    telefono: "",
    direccion: "",
    num_tarj: "",
  });

  const obtenerIdDesdeToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id || payload.userId;
  };

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const token = localStorage.getItem("token");
        const id = obtenerIdDesdeToken();

        if (!token || !id) return;

        setUserId(id);

        const res = await api.get("/api/actualizarDatos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const usuarioActual = res.data.find((user) => user.id === id);

        if (!usuarioActual) return;

        setDatos({
          usuario: usuarioActual.usuario || "",
          email : usuarioActual.email || "",
          telefono: usuarioActual.telefono || "",
          direccion: usuarioActual.direccion || "",
          num_tarj: usuarioActual.num_tarj || "",
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    cargarDatos();
  }, []);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCambios = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.patch(`/api/actualizarDatos/${userId}`, datos, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMensaje("Datos actualizados correctamente");
      setEditando(false);
    } catch (error) {
      console.error("Error guardando datos:", error);
      setMensaje("No se pudieron guardar los cambios");
    }
  };
  const navigate = useNavigate();
  const eliminarCuenta = async () => {
  const confirmar = window.confirm("¿Seguro que quieres eliminar tu cuenta?");

  if (!confirmar) return;

  try {
    const token = localStorage.getItem("token");

    await api.delete(`/api/actualizarDatos/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("token");
    navigate("/registro");
  } catch (error) {
    console.error("Error eliminando cuenta:", error);
    setMensaje("No se pudo eliminar la cuenta");
  }
};
  return (
    <>
      <Navbar />

      <form id="usuario" onSubmit={guardarCambios}>
        <div className="container-fluid m-4" id="form">
          <div className="row">
            <div className="justify-content-start col-lg-3 col-md-3 col-sm-12 text-center">
              <img
                src={usuario}
                className="img-fluid"
                alt="usuario"
                width="100px"
              />
            </div>

            <div className="justify-content-start col-lg-1 col-md-1 col-sm-12 text-center">
              <p id="user_name">
                {datos.usuario || "User name"}{" "}
                <button
                  className="bg-transparent border-0 rounded"
                  id="botoni"
                  type="button"
                  onClick={() => setEditando(!editando)}
                >
                  <img src={edit} width="20px" alt="editar" />
                </button>
              </p>

              <p>
                <strong>ID USER {userId || "######"}</strong>
              </p>
            </div>

            <div className="justify-content-center col-lg-4 col-md-3 col-sm-12 text-center">
              <a
                href="listadeseos.html"
                className="text-white text-decoration-none"
              >
                <img src={deseos} alt="deseos" width="30" />
              </a>
              <p>Lista de deseos</p>
            </div>

            <div className="justify-content-center col-lg-4 col-md-3 col-sm-12 text-center">
              <a
                href="carritoo.html"
                className="text-white text-decoration-none"
              >
                <img src={compras} alt="carrito" width="30" />
              </a>
              <p>Mi carrito</p>
            </div>
          </div>

          <div className="row" id="usuarioo">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              <h1 className="fs-5">
                Datos Personales{" "}
                <button
                  className="bg-transparent border-0 rounded"
                  id="boton-aper"
                  type="button"
                  onClick={() => setEditando(!editando)}
                >
                  <img src={edit} width="20px" alt="editar" />
                </button>
              </h1>

              <div className="m-4">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="usuario"
                  id="nombre"
                  className="entrada inp_pedi"
                  required
                  value={datos.usuario}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="m-4">
                <label htmlFor="corre_E">Correo Electronico</label>
                <input
                  type="email"
                  name="email"
                  id="corre_E"
                  className="entrada inp_pedi"
                  required
                  autoComplete="email"
                  value={datos.email}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="m-4">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  className="entrada inp_pedi"
                  value={datos.telefono}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="m-4">
                <label htmlFor="direccion">Direccion</label>
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  className="entrada inp_pedi"
                  value={datos.direccion}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="m-4">
                <label htmlFor="tarj">Numero Tarjeta</label>
                <input
                  type="text"
                  name="num_tarj"
                  id="tarj"
                  className="entrada inp_pedi"
                  value={datos.num_tarj}
                  onChange={handleChange}
                  disabled={!editando}
                  maxLength="30"
                />
              </div>

              {mensaje && <p>{mensaje}</p>}

              <button type="submit" className="border-0 rounded bts text-white">
                Guardar Cambios
              </button>
              <button
              type="button"className="border-0 rounded bts text-white ms-2" onClick={eliminarCuenta}>
              Eliminar Cuenta
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormularioCuenta;