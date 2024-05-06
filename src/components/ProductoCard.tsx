import { Link } from "react-router-dom";
import type { Producto } from "../types/Producto";

type ProductoCardProps = {
  producto: Producto;
};
export default function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <div>
      <div className=" flex items-center justify-center h-[86vh] ">
        <div className="border-x-2  border-black  w-full md:w-[400px] lg:w-[500px] bg-primarioDos rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className=" flex items-center justify-center  mb-6">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${
                  producto.productoImg
                }`}
                className="w-25 h-25  "
              />
            </div>
            <div className="text-center  ">
              <p className="text-4xl font-semibold  text-gray-900 dark:text-white">
                {producto.productoNombre}
              </p>
              <p className="text-xl font-semibold  text-gray-900 dark:text-white">
                {producto.productoDescripcion}
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {producto.price}
              </p>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-2 gap-4">
                <Link
                  to={"/"}
                  className="text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Cotizar
                </Link>
                <Link
                  to={"/producto"}
                  className=" w-full text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Vista del Prodcuto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
