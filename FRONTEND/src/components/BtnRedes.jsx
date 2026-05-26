
function Redes({enlace, imagen}){
    return(
        <button class="btn">
            <a href={enlace}>
                <img src={imagen} width="40px"></img>
            </a>
        </button> 
    )
}

export default Redes;