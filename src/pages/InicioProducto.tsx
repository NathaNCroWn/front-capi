import { Link } from "react-router-dom";
import { obtenerProductos } from "../api/ProductosAPI";
import { useQuery } from "@tanstack/react-query";
import ProductoCard from "../components/ProductoCard";

const InicioProducto = () => {
  const { data } = useQuery({
    queryKey: ["productos"],
    queryFn: obtenerProductos,
  });
  return (
    <div>
      <div className="fixed top-7 left-6 group mt-[120px] ">
        <Link
          to={"/admin"}
          className=" text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none"
        >
          Editar
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 ">
        {data?.map((producto, index) => (
          <ProductoCard key={index} producto={producto}/>
        ))}
      </div>
    </div>
  );
};
export default InicioProducto;
