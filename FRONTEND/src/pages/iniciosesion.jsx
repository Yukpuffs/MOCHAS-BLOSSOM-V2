import FormularioAuth from "../components/Auth";
import logo from "../assets/logo/Mocha_s_blossom-removebg-preview.png";
import img from "../assets/Decoraciones/Screenshot_2025-09-13_194328-removebg-preview.png";

function InicioSesion() {
    const campos = [
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
        titulo="Iniciar Sesión"
        subtituloKR="인생은 케이크 같아요"
        subtituloES="La vida es como un pastel"
        campos={campos}
        textoBoton="Sign in"
        textoInferior="¿No tienes cuenta?"
        textoLink="Registrarse"
        ruta="/registro"
        imagen={img}
        logo={logo}
        endpoint="/auth/login"
    />
    );
}

export default InicioSesion;