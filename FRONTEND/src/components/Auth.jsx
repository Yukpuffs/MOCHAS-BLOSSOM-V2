import { Link } from "react-router-dom";

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
    logo
}) {
    return (
    <div class="container-fluid row ">
        <div class="container-fluid inicio col-lg-6 col-md-6 col-sm-6 text-center align-content-center" id="card-present">
            <div className="comfort-header">
                <img  class="mc" src={logo} alt="Logo" width="100px"></img>
                <h1 className="comfort-title"> {titulo} </h1>
                <p className="gentle-subtitle"> {subtituloKR} <br /> {subtituloES} </p>
                <img class="pst mt-5" src={imagen} alt="brownie" ></img>
            </div>
        </div>
        <div className="soft-card">
            <form>
            {campos.map((campo,index)=>(
                <div className="soft-field" key={index}>
                    <div className="field-container">
                        <input type={campo.tipo} id={campo.id} placeholder={campo.placeholder} />
                        <label htmlFor={campo.id}> {campo.label} </label>
                    </div>
                </div>
            ))}

            <button className="comfort-button">
                {textoBoton}
            </button>
            </form>

            <div className="comfort-signup">
                <span> {textoInferior} </span>
                <Link to={ruta} className="comfort-link signup-link">
                    {textoLink}
                </Link>
            </div>
        </div>
        </div>    
    );
}

export default FormularioAuth;