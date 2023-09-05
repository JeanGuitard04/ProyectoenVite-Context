import { XMarkIcon } from "@heroicons/react/24/solid"

//
const OrdenProductos = props => {
    const { id, nombre, imageUrl, precio} = props

    return (
        <div className="flex justify-between items-center">
            <div className=" flex items-center gap-2">
                <figure className=" w-14 h-14">
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={nombre} />
                </figure>
                <p className="text-sm font-light">{nombre}</p>
            </div>
            <div className=" flex items-center gap-2">
                <p className="text-lg font-medium">{precio}</p>
                    <XMarkIcon
                    className="h-6 w-6 text-black cursor-pointer"/> 
            </div>
        </div>
    )
}

export {OrdenProductos}
