import FormularioAuth from "../components/Auth";

function Registro() {
  const campos = [
    {
      tipo: "text",
      id: "usuario",
      placeholder: "Usuario",
      label: "Usuario",
    },
    {
      tipo: "email",
      id: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      tipo: "password",
      id: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
    },
  ];

  return (
    <FormularioAuth
      titulo="Registrarse"
      subtituloKR="행복한 하루 되세요"
      subtituloES="¡Que tengas un día feliz!"
      campos={campos}
      textoBoton="Sign up"
      textoInferior="¿Ya tienes cuenta?"
      textoLink="Iniciar sesión"
      ruta="/inicio"
      endpoint="/auth/registro"
    />
  );
}

export default Registro;