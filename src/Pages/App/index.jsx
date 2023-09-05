import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import "./App.css";
import { Home } from "../Home";
import { Tienda } from "../Tienda";
import { Nosotros } from "../Nosotros";
import { Terminos } from "../Terminos";
import { Header } from "../../Componentes/Header";
import { Carrito } from "../../Componentes/Carrito/Carrito";
import { Footer } from "../../Componentes/Footer";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/Home", element: <Home /> },
    { path: "/Tienda", element: <Tienda /> },
    { path: "/Nosotros", element: <Nosotros /> },
    { path: "/Terminos", element: <Terminos /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Carrito />
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
