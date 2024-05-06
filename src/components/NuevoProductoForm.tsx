import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { ProductoForm } from "../types/Producto";
import { crearProducto } from "../api/ProductosAPI";

type NuevoProductoFormProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NuevoProductoForm({
  setModal,
}: NuevoProductoFormProps) {
  const queryClient = useQueryClient();
  const [producto, setProducto] = useState<ProductoForm>({
    productoNombre: "",
    productoDescripcion: "",
    productoDescripcionSimple: "",
    price: 0,
    productImg: null,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setProducto((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
  const crearProductoMutation = useMutation({
    mutationFn: crearProducto,
    onSuccess: () => {
      toast.success("Producto creado correctamente");
      queryClient.invalidateQueries({ queryKey: ["productos"] });
      setModal(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProducto({
      productoNombre: "",
      productoDescripcion: "",
      productoDescripcionSimple: "",
      price: 0,
      productImg: null,
    });
    crearProductoMutation.mutate(producto);
  };
  return (
    <div className="border-4 border-black  max-w-screen-lg md:w-[4  00px] lg:w-[1500px] bg-primarioDos rounded-lg shadow-2xl fixed ">
      <div className="py-10 px-10">
        <div className="flex justify-between">
          <h1 className="text-3xl mt-3 mb-5 text-center">Crear Producto.</h1>

          <button type="button" onClick={() => setModal(false)}>
            <svg
              className="h-9 w-9 text-red-500  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 xl:flex-row">
            <div className="xl:w-1/2 ">
              <label
                htmlFor="nameProduct"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese el nombre del prodcuto
              </label>
              <input
                onChange={handleChange}
                value={producto.productoNombre}
                type="string"
                id="nameProduct"
                name="productoNombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="xl:w-1/2">
              <label
                htmlFor="productoDescripcionSimple"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese la descripcion simble
              </label>
              <input
                onChange={handleChange}
                value={producto.productoDescripcionSimple}
                type="text"
                id="productoDescripcionSimple"
                name="productoDescripcionSimple"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 xl:flex-row">
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese el valor
              </label>
              <input
                onChange={handleChange}
                value={producto.price}
                type="number"
                id="price"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="productoImg"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingrese la imgen del producto
              </label>
              <input
                onChange={handleChange}
                type="file"
                id="productImg"
                name="productImg"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="productoDescripcion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese la descripcion
            </label>
            <input
              onChange={handleChange}
              value={producto.productoDescripcion}
              type="productoDescripcion"
              id="productoDescripcion"
              name="productoDescripcion"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-5 grid  gap-4">
            <button
              type="submit"
              className="text-white bg-primarioUno hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-6 ml-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
