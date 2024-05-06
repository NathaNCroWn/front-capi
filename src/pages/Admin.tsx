import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { eliminarProducto, obtenerProductos } from "../api/ProductosAPI";
import { Bounce, toast } from "react-toastify";
import { Producto } from "../types/Producto";
import NuevoProductoForm from "../components/NuevoProductoForm";
import { useState } from "react";
import EditarProductoForm from "../components/EditarProducto";

const Admin = () => {
  const [modal, setModal] = useState(false);
  const [modaledit, setModaledit] = useState(false);
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["productos"],
    queryFn: obtenerProductos,
  });

  const deleteMutation = useMutation({
    mutationFn: eliminarProducto,
    onSuccess: () => {
      if (window.confirm("Desea borrar el producto")) {
        toast.error("Producto eliminado correctamente", {
          theme: "dark",
          hideProgressBar: true,
          autoClose: 5000,
          transition: Bounce,
        });
        queryClient.invalidateQueries({ queryKey: ["productos"] });
      }
    },
  });
  const handleEliminar = (id: Producto["id"]) => {
    deleteMutation.mutate(id);
  };

  return (
    <div>
      <div className="fixed top-6 left-6 group mt-[120px]">
        <Link
          to={"/"}
          className=" text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none"
        >
          Volver
        </Link>
      </div>
      <div className="relative h-5">
        <button
          type="button"
          onClick={() => setModal(!modal)}
          className=" absolute  right-0 mt-9 mr-2  text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Agregar producto
        </button>
      </div>
      <div className="mt-16 overflow-x-auto shadow-md sm:rounded-lg border-y-2  border-black ">
        <table className="w-full text-sm text-center  text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-primarioUno border-b-2  border-gray-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                descripcion simble
              </th>
              <th scope="col" className="px-6 py-3">
                descripcion general
              </th>
              <th scope="col" className="px-6 py-3">
                valor
              </th>
              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((producto) => (
              <tr
                key={producto.id}
                className="bg-primarioDos border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${
                      producto.productoImg
                    }`}
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.productoNombre}
                </td>
                <td className="px-6 py-4">{producto.productoDescripcion}</td>
                <td className="px-6 py-4">
                  {producto.productoDescripcionSimple}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.price}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/admin/${producto.id}`}
                    type="button"
                    onClick={() => setModaledit(!modaledit)}
                    className="font-medium text-blue-600 dark:text-red-500 hover:underline"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() => handleEliminar(producto.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center">
        {modal && <NuevoProductoForm setModal={setModal} />}
      </div>
      <div className="flex items-center justify-center">
        {modaledit && (
          <EditarProductoForm
            setModaledit={setModaledit}
            modaledit={modaledit}
          />
        )}
      </div>
    </div>
  );
};
export default Admin;
