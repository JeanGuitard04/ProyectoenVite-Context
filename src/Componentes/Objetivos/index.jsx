import './Objetivos.css'

// Componente de la página HOME //

function Objetivos() {
    return (
        <section id="sec2">
        <div className="rectangulo4">

            <p>OBJETIVOS SOCIOAMBIENTALES</p>
        </div>
        <br></br> <br></br> <br></br>
        <div className="image-container">
            <img src='../../../public/solidarity.png' alt="Imagen 1" width="90px" />
            <img src='../../../public/cheers.png' alt="Imagen 2" width="90px" />
            <img src='../../../public/group.png' alt="Imagen 3" width="90px" />
            <img src='../../../public/recycle (1).png' alt="Imagen 4" width="90px" />
        </div>

        <ul id="botonesobjetivos">
            <li>
            <ul className="botonesobjetivos">
                <li>
                <a className="botones" href="Index.html">
                    Impulsamos la comunidad local
                </a>
                <a className="botones" href="Index.html">
                    Beber con moderación
                </a>
                <a className="botones" href="Index.html">
                    Visitas guiadas con fines educativos
                </a>
                <a className="botones" href="Index.html">
                    Envases reciclados
                </a>
            </li>
                </ul>
                    </li>
                    </ul>
        <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br />
        </section>
    );
}

export {Objetivos}