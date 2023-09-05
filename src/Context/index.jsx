import { createContext,useContext, useState } from 'react' 

export const ShoppingCartContext = createContext( )

// Creamos context para centralizar nuestros props

export const ShoppingCartProvider = ({children}) => {

    //Logica con contador de carrito //
    const [count, setCount] = useState(0)

    //Logica para sumar productos al carrito:
    const Sumar = () => {setCount(count +1)}

    //Logica para restar productos del carrito:




    // Abrir y cerrar Ficha que se desplegara en la pagina Tienda //
    const [fichaAbierta, setFichaAbierta] = useState(false)
    const abrirFichaProducto = () => setFichaAbierta(true)
    const cerrarFichaProducto = () => setFichaAbierta(false)

    //visualizar los productos  del carrito en el componente Carrito que estara en el componente Header//
    const [productToShow, setProductToShow] = useState ({})

    // Sumar productos al carrito
    const [cartProducts, setCartProducts] = useState ([])

    // Abrir y cerrar Carrito de Compras //
    const [carritoAbierto, setCarritoAbierto] = useState(false)
    const abrirCarritoAbierto = () => setCarritoAbierto(true)
    const cerrarCarritoAbierto = () => setCarritoAbierto(false)

    return (
        // Se suman todas las props que necesitaremos en Context
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            Sumar,
            fichaAbierta,
            abrirFichaProducto,
            cerrarFichaProducto,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            carritoAbierto,
            abrirCarritoAbierto,
            cerrarCarritoAbierto

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


