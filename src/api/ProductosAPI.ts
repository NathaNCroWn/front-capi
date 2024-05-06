import api from "../lib/axios";
import {
  Producto,
  ProductoForm,
  productoSchema,
  productosSchema,
} from "../types/Producto";

export const obtenerProductos = async () => {
  try {
    const { data } = await api("/productos/");
    const response = productosSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoPorId = async (numberId: Producto["id"]) => {
  try {
    const { data } = await api(`/productos/ver_producto_id/${numberId}`);
    const response = productoSchema.safeParse(data);
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
    formData.append("productoImg", producto.productImg as File);
    await api.post("/productos/create-producto", formData);
  } catch (error) {
    console.log(error);
  }
};

type actualizarProductoPros = {
  producto: ProductoForm;
  numberId: Producto["id"];
};

export const actualizarProducto = async ({
  producto,
  numberId,
}: actualizarProductoPros) => {
  try {
    const formData = new FormData();
    formData.append("productoNombre", producto.productoNombre);
    formData.append("productoDescripcion", producto.productoDescripcion);
    formData.append(
      "productoDescripcionSimple",
      producto.productoDescripcionSimple
    );
    formData.append("price", producto.price.toString());
    formData.append("productoImg", producto.productImg as File);
    const { data } = await api.put(
      `/productos/actualizar-producto/${numberId}`,
      formData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarProducto = async (id: Producto["id"]) => {
  console.log(id);
  await api.delete(`/productos/borrar-producto/${id}`);
};
