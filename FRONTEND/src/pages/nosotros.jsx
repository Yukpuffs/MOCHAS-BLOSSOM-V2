import Redes from "../components/BtnRedes"
import Ig from "../assets/botones/redes/ig.png"
import Pin from "../assets/botones/redes/pin.png"
import Face from "../assets/botones/redes/face.png"
import Tik from "../assets/botones/redes/tik.png"
import Navbar from "../components/navbar";


function Nosotros() {
    return (
        <>
        <Navbar></Navbar>
        <div>
            <div className="container-fluid row mt-5 text-center justify-content-center">

                <div className="col-lg-5 col-md-5 col-sm-12 m-5">

                    <h4 className="fontt-text-bold">
                        Welcome to MOCHA'S BLOSSOM
                    </h4>

                    <p className="if text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dolorum perferendis quisquam aperiam pariatur, laboriosam
                        dolor suscipit explicabo consequuntur fugit repellat
                        provident nulla.
                    </p>

                </div>

                <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">

                    <iframe
                        src="https://www.youtube.com/embed/-xlmBoQ4paI"
                        width="500"
                        height="300"
                        title="Video presentación"
                    />

                </div>

            </div>
            <div className="container-fluid text-center align-items-center mt-5 ">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h2> Contact us </h2>
                    <Redes
                        enlace="https://www.instagram.com/"
                        imagen={Ig}
                    />

                    <Redes
                        enlace="https://co.pinterest.com/"
                        imagen={Pin}
                    />

                    <Redes
                        enlace="https://www.facebook.com/"
                        imagen={Face}
                    />

                    <Redes
                        enlace="https://www.tiktok.com/"
                        imagen={Tik}
                    />
                </div>        
            </div>

        </div>
    </>
    )
}
export default Nosotros
