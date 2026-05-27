import FormularioAuth from "../components/Auth";
import logo from "../assets/logo/Mocha_s_blossom-removebg-preview.png";
import img from "../assets/Decoraciones/Screenshot_2025-09-13_194328-removebg-preview.png";

function InicioSesion() {
    
  const camposLogin = [
    {
      id: "email",
      tipo: "email",
      placeholder: "Correo electrónico",
      label: "Email",
    },
    {
      id: "password",
      tipo: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
    },
  ];

  return (
    <FormularioAuth
      titulo="Iniciar Sesión"
      subtituloKR="안녕하세요!"
      subtituloES="¡PUEDES HACERLO!"
      campos={camposLogin}
      textoBoton="Iniciar Sesión"
      textoInferior="¿No tienes una cuenta?"
      textoLink="Regístrate aquí"
      ruta="/registro" 
      imagen={img}
      logo={logo}
      endpoint="/auth/login"
    />
  );
}

export default InicioSesion;