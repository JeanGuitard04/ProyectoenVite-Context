import { Layout } from "../../Componentes/Layout";
import { Producto } from "../../Componentes/Producto";
import { cervezasHuichahue } from "../../Data";

function Tienda() {
  //Se pinta con .map el array de data.js que se consume en el componente Producto //
  return (
    <section className="bg-slate-200 bg-opacity-60 py-6 ">
      <h1 className="text-center fon-extrabold text-4xl my-8  ">
        Lineas de Cervezas Artesanales
      </h1>
      <div className="grid grid-cols-3 gap-4 mx-28 ">
        {cervezasHuichahue.map((cerveza) => (
          <Producto
            key={cerveza.id}
            id={cerveza.id}
            nombre={cerveza.nombre}
            /* descripcion ={cerveza.descripcion} */
            grados={cerveza.grados}
            formato={cerveza.formato}
            precio={cerveza.precio}
            enStock={cerveza.enStock}
            Imagen={cerveza.Imagen}
          />
        ))}
      </div>
    </section>
  );
}

export { Tienda };
