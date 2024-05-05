import api from "../lib/axios";
import { ProductoForm, productosSchema } from "../types/Producto";

export const obtenerProductos = async () => {
  try {
    const { data } = await api("/productos/");
    console.log(data);
    const response = productosSchema.safeParse(data);
    console.log(response);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (producto: ProductoForm) => {
  try {
    const formData = new FormData();
    formData.append("productoNombre", producto.productoNombre);
    formData.append("productoDescripcion", producto.productoDescripcion);
    formData.append(
      "productoDescripcionSimple",
      producto.productoDescripcionSimple
    );
    formData.append("price", producto.price.toString());
    producto.productImg && formData.append("productImg", producto.productImg);
    console.log(formData.get("productImg"));
    const response = await api.post("/productos/create-producto", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const eliminarProducto = async (id: number) => {
  console.log(id);
  await api.delete(`/productos/borrar-producto/${id}`);
};
