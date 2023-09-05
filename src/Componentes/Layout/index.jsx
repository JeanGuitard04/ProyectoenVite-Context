import { Children } from "react"


// Layout: en este componente tendremos los estilos en CSS para que se apliquen a todos los componentes children ; se debe importar en las paginas del proyecto y expresarlo de inmediato despues de return. //
const Layout = ({ children }) => {

    return (
        <div>
            {children}
        </div>
    )
}

export {Layout}
