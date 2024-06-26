import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioProducto from "./pages/InicioProducto";
import Registro from "./pages/Registro";
import InicioSesion from "./pages/InicioSesion";
import Informacion from "./pages/Informacion";
import Admin from "./pages/Admin";
import Producto from "./pages/Producto";
import CapiTienda from "./layouts/CapiTienda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CapiTienda />}>
          <Route path="/" element={<InicioProducto />} />
          <Route path="registro" element={<Registro />} />
          <Route path="inicioSesion" element={<InicioSesion />} />
          <Route path="informacion" element={<Informacion />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin/:id" element={<Admin />} />
          <Route path="producto" element={<Producto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// hacer vista del producto, esto quiere decir que cuando se entre al producto se llenen los datos con la imagen  -> !!!NO USAR CHATGPT!!!!
