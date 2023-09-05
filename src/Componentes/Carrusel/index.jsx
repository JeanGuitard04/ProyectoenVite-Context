import './Carrusel.css'

// Componente de la pagina HOME 

function Carrusel() {
    return (
        <div className="container">
        <ul className="slider">
            <li id="slide1">
            <img src='../../../public/Slide/C1.png' width="200px" alt="Slide 1" />
            </li>
            <li id="slide2">
            <img src='../../../public/Slide/C2.png' width="200px" alt="Slide 2" />
            </li>
            <li id="slide3">
            <img src='../../../public/Slide/C3.png' width="200px" alt="Slide 3" />
            </li>
            <li id="slide4">
            <img src='../../../public/Slide/C4.png' width="200px" alt="Slide 4" />
            </li>
        </ul>

        <ul className="menu">
            <li>
            <a href="#slide1"></a>
            </li>
            <li>
            <a href="#slide2"></a>
            </li>
            <li>
            <a href="#slide3"></a>
            </li>
            <li>
            <a href="#slide4"></a>
            </li>
        </ul>
        </div>
    );
}

export {Carrusel}
