import client from './client'

export interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

export const getProductos = async (): Promise<Producto[]> => {
  const { data } = await client.get('/productos')
  return data
}