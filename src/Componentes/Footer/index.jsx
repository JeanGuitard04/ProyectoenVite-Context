import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="containerfooter">
        <div className="rowfooter">
          <div className="footer-col">
            <h4>MENÚ</h4>
            <ul>
              <li>
                <NavLink to="./Home">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="./Tienda">Tienda</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="./Terminos">Términos y condiciones</NavLink>{" "}
              </li>
              <li>
                <a href="contacto.html">Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SÍGUENOS</h4>
            <span className="redes-sociales-link">
              <ul>
                <li>
                  <span>
                    <a
                      href="https://www.instagram.com/cerveza_huichahue/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                  <p>
                    <a
                      href="https://www.instagram.com/cerveza_huichahue/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </p>
                </li>
                <li>
                  <span>
                    <a
                      href="https://web.facebook.com/cerveza.huichahue/?_rdc=1&_rdr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </span>
                  <p>
                    <a
                      href="https://web.facebook.com/cerveza.huichahue/?_rdc=1&_rdr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </p>
                </li>
                <li>
                  <span>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </span>
                  <p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </p>
                </li>
              </ul>
            </span>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                {" "}
                <NavLink to="./Home">
                  {" "}
                  <img
                    src="../../../public/logo.png"
                    alt="Logo Cerveza Huichahue"
                    style={{ width: "120px", height: "120px" }}
                  />{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SOBRE NOSOTROS</h4>
            <ul>
              <li>
                <a href="#">Nuestra Historia</a>
              </li>
              <li>
                <a href="#">Visión</a>
              </li>
              <li>
                <a href="#">Misión</a>
              </li>
              <li>
                <a href="#">Mundo Consciente</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-col">
        <h4>PARTNERS</h4>
        <div className="partners-logos">
          <ul>
            <li>
              <img
                src="../../../public/Balloon.png"
                alt="Logo Balloon Latam"
                style={{ width: "30px", height: "50px" }}
              />
            </li>
            <li>
              <img
                src="../../../public/Reciclamos.png"
                alt="Todos reciclamos"
                style={{ width: "50px", height: "50px" }}
              />
            </li>
            <li>
              <img
                src="../../../public/Fosis.png"
                alt="Logo Fosis"
                style={{ width: "60px", height: "60px" }}
              />
            </li>
            <li>
              <img
                src="../../../public/Kyklos.png"
                alt="Logo Kyklos"
                style={{ width: "70px", height: "40px" }}
              />
            </li>
            <li>
              <img
                src="../../../public/Sercotec.png"
                alt="Logo Sercotec"
                style={{ width: "60px", height: "30px" }}
              />
            </li>
            <li>
              <img
                src=""
                alt="Logo Generation"
                style={{ width: "60px", height: "30px" }}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-texto-copyright">
        <p>Cerveza Huichahue®. Beber con moderación</p>
      </div>
    </footer>
  );
}

export { Footer };
