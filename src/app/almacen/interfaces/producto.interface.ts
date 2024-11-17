export interface Producto{
    nombre: string;
    precio: number;
    stock: number;
    precioOferta?: number;
    imagen?: string;
    fecha?: Date;
}
