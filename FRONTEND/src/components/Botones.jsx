function Boton({ Texto, accion }) {
    return (
        <button
            className="border-0 rounded bts text-white"
            onClick={accion}
        >
            {Texto}
        </button>
    );
}

export default Boton;