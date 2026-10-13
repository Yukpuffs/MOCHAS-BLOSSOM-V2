function Boton({ Texto, accion, className = "" }) {
    return (
        <button
            className={`border-0 rounded bts text-white px-3 py-2 ${className}`.trim()}
            onClick={accion}
        >
            {Texto}
        </button>
    );
}

export default Boton;