import { useContext, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";

const Carrito = () => {
  const context = useContext(ShoppingCartContext);
  /* const [carritoAbierto, setCarritoAbierto] = (false) */
  console.log(context);
  return (
    <aside
      className={`${
        context.count > 0 ? "flex" : "hidden" // Corregir linea de codigo como condicional para que se pinte el carrito en el HEADER.
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi Orden</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.cerrarCarritoAbierto()}
          ></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export { Carrito };
