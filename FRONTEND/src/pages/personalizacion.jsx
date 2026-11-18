import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import neko from "../assets/botones/neko.png";
import videoChocolate from "../assets/animaciones/Pastel/Chocolate/chocolate.mp4";

function Personalizacion() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center align-content-center mt-5">
          <h1 className="fontt-text">
            BUILD YOUR DREAM DESSERT
          </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda adipisci omnis quaerat. </p>
          <video src={videoChocolate} autoPlay loop muted playsInline width="300px"/>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 text-center align-content-center mt-5">
          <img src={neko} alt="gato" width="50px" />
          <br />
          <button className="btn rounded bts">
            <Link to="/personalizaci" className="text-decoration-none text-white fontt-text rounded-3">
              Comienza a personalizar
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Personalizacion;
