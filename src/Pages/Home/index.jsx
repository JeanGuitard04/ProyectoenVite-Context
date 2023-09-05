import './Home.css'
import { Layout } from "../../Componentes/Layout"
import {Carrusel} from "../../Componentes/Carrusel"
import { Objetivos } from "../../Componentes/Objetivos"


function Home() {

    return (
        <Layout >
            <Carrusel />
            <div className="rectangulo2">
                <p>PRODUCTOS DESTACADOS</p>
            </div>
            <div>
                <ul className="fotosProductos">
                <li id="cervezas">
                    <br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br>

                    <img src='../../../public/ImagenesPNG/amberale.png' alt="cerveza1" width="400px" />
                    <img src='../../../public/ImagenesPNG/cachodecabra.png' alt="cerveza2" width="400px" />
                    <img src='../../../public/ImagenesPNG/arandano.png' alt="cerveza3" width="400px" />
                    <img src='../../../public/ImagenesPNG/maqui.png' alt="cerveza1" width="400px" />
                    <img src='../../../public/ImagenesPNG/kombuchela.png' alt="cerveza2" width="400px" />
                    <img src='../../../public/ImagenesPNG/piñones.png' alt="cerveza3" width="400px" />
                </li>
                </ul>
            </div>
            <br></br>
                    <br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br>

            <div className="rectangulo3">
                <p>PACKS</p>
            </div>
            <div>
                <ul className="fotospacks">
                <li id="packs">
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src='../../../public/ImagenTienda/pack1.jpg' alt="cerveza1" width="400px" />
                    <img src='../../../public/ImagenTienda/pack2.jpg' alt="cerveza2" width="400px" />
                    <img src='../../../public/ImagenTienda/pack3.jpg' alt="cerveza2" width="400px" />
                </li>
                </ul>
            </div>
                    <br></br><br></br>
                    <br></br><br></br>
            < Objetivos />
      
        </Layout>
    )
}

export {Home}
