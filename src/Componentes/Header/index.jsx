import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

function Header() {
  const context = useContext(ShoppingCartContext);

  return (
    <header className="sticky -z-0 top-0 pt-2 bg-black bg-opacity-90">
      <figure to="./" className="flex justify-center">
        <NavLink>
          <img src="../../public/logo.png" alt="LogoHeader" width={80} />
        </NavLink>
      </figure>
      <nav className="flex justify-between h-14 ">
        <NavLink>
          <img
            src="../../public/barramenu.png"
            className=" relative bottom-2 left-2 w-12 h-8"
            alt="barra"
          />
        </NavLink>

        <NavLink
          to="./Tienda"
          className="bg-black bg-opacity-50 border-yellow-600  border-2 rounded-2xl h-10 w-24   font-bold text-xl text-white hover:text-yellow-600 text-center"
        >
          {" "}
          Tienda{" "}
        </NavLink>
        <NavLink
          to="./Contacto"
          className="bg-black bg-opacity-50 border-yellow-600  border-2 rounded-2xl h-10 w-24 font-bold text-xl text-white  hover:text-yellow-600  text-center"
          href="index.html"
        >
          Contacto
        </NavLink>
        <div className=" flex relative bottom-3 right-3 text-gray-400 items-center">
          <NavLink className=" flex relative bottom-3 right-3 text-gray-400 items-center">
            <ShoppingCartIcon
              onClick={() => context.abrirCarritoAbierto()}
              className="h-10 w-10 text-yellow-600 "
            ></ShoppingCartIcon>
            {context.count}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export { Header };
