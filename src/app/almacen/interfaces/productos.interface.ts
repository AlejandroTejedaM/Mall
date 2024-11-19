import {CategoriaDTO} from './categorias.interface';

export interface ProductoDTO {
  id: number;
  nombreProducto: string;
  stock: number;
  precio: number;
  idCategoria : CategoriaDTO["id"];
  nombreCategoria?: CategoriaDTO["nombreCategoria"];
}

export interface ProductoRequestDTO {
  nombreProducto: string;
  stock: number;
  precio: number;
  idCategoria: CategoriaDTO["id"];
}
