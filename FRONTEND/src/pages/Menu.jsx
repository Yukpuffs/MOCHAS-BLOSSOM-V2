import Card from "../components/Tarjeta.jsx";
import Brownie from "../assets/Menu/Brownies/imagee.png";
import Cupcake from "../assets/Menu/Cupcakes/cupcake.png";
import Torta from "../assets/Menu/Tortas/torta.png";


function Menu({agregarAlCarrito}){
    return(
    <>
        <Card
        imagen={Brownie}
        titulo="Brownie"
        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus ligula nibh. Vestibulum maximus leo eu diam imperdiet, at congue justo lobortis. Ut elementum leo maximus, lacinia lectus venenatis, ornare ante. Aliquam erat volutpat. Mauris maximus nibh ac eros eleifend blandit a ac diam."

        agregarAlCarrito={agregarAlCarrito}
        />

        <Card
        imagen={Cupcake}
        titulo="Cupcake"
        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus ligula nibh. Vestibulum maximus leo eu diam imperdiet, at congue justo lobortis. Ut elementum leo maximus, lacinia lectus venenatis, ornare ante. Aliquam erat volutpat. Mauris maximus nibh ac eros eleifend blandit a ac diam."

        agregarAlCarrito={agregarAlCarrito}
        />

        <Card
        imagen={Torta}
        titulo="Torta"
        descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus ligula nibh. Vestibulum maximus leo eu diam imperdiet, at congue justo lobortis. Ut elementum leo maximus, lacinia lectus venenatis, ornare ante. Aliquam erat volutpat. Mauris maximus nibh ac eros eleifend blandit a ac diam."

        agregarAlCarrito={agregarAlCarrito}
        />

    </>
    )
}

export default Menu