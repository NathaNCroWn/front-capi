import {z} from 'zod'

export const productoSchema  = z.object({
    id: z.number(),
    productoNombre:z.string(),
    productoImg:z.string(),
    productoDescripcion: z.string(),
    productoDescripcionSimple: z.string(),
    price:z.number()
})

export const productosSchema = z.array(
    productoSchema
)

export type Producto = z.infer<typeof productoSchema>

export type ProductoForm = Pick<Producto , 'productoNombre' | 'productoDescripcion' | 'productoDescripcionSimple' | 'price'> 
