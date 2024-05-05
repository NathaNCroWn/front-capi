import api from "../lib/axios";
import { ProductoForm, productosSchema } from "../types/Producto";

export const obtenerProductos = async () => {
  try {
    const { data } = await api("/productos/");
    return data
    const response = productosSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};


export const crearProducto = async (formData: FormData) => {
  try {
    const { data } = await api.post("/productos/create-producto", formData);
    return {data}
  } catch (error) {
    console.log(error);
  }
};
