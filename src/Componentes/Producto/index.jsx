import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { cervezasHuichahue } from "../../Data";



function Producto({ id, nombre, seo, descripcion, precio, grados, formato, enStock, Imagen }) {
    

    //Llamamos a context:
    const context = useContext(ShoppingCartContext)

    //Se utiliza en la imagen del la ficha para al darle click se pueda desplegar o una vista de este producto en la misma pagina //
    const abrirFicha = (fichaProducto) => {
        context.abrirFichaProducto()
        context.setFichaAbierta(fichaProducto)
    }


    // Utilizamos una funcion para entregar todos estos parametros al darle al boton de AÑADIR AL CARRITO

    const addProductsToCart = (datoProducto) => {
        context.setCount (context.count + 1) // contador de unidades
        context.setCartProducts([...context.cartProducts, datoProducto]) // captador de datos para rellenar carrito
        context.abrirCarritoAbierto() // abrir el carrito al darle click
        
        console.log('Cart: ',context.cartProducts) // Pintamos el array captado
    }


    return (
        <article className=' grid rounded-xl border-2 hover:shadow-lg z-1 overf'>
            <figure onClick={() =>/* Al darle click podremos abrir la ficha de la vista en Tienda*/ abirFicha(cervezasHuichahue)} className='overflow-hidden'>
                <img  className='w-full h-72 object-cover rounded-xl transition-all hover:scale-125 z-2 ' src={Imagen} alt={seo} />
            </figure>
            <div className='flex-col text-base text-center mx-6.5'>
                <h2 className='text-5xl'>{nombre}</h2>
                <br/>
                <p>{descripcion}</p>
                <br/>
                <p>Grados de Alcohol: {grados}</p>
                
                <p>Botella: {formato}</p>
                <br/>
                <p className='text-lg font-extrabold'>${precio}</p>
                {enStock ? <p>Disponible</p> : <p>No disponible</p>}
                <button className='bg-black  border-yellow-600  border-2 rounded-2xl h-10 w-40 font-bold text-lg text-white  hover:text-yellow-600  text-center' 
                    onClick={() => /* Al darle click podremos activar las funciones del carrito y ademas abrir la vista */addProductsToCart(cervezasHuichahue)}>
                    Añadir al carrito
                    </button>
            </div>
            
        </article>
    );
}

export {Producto}