import { z } from "zod";

export const productoSchema = z.object({
  id: z.number(),
  productoNombre: z.string(),
  productoImg: z.string().nullable(),
  productoDescripcion: z.string(),
  productoDescripcionSimple: z.string(),
  price: z.string(),
});

export const productosSchema = z.array(productoSchema);

export type Producto = z.infer<typeof productoSchema>;

export type ProductoForm = {
  productoNombre: string;
  productoDescripcion: string;
  productoDescripcionSimple: string;
  price: number;
  productImg: File | null;
};
