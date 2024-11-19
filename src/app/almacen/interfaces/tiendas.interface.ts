import {EncargadoDTO} from './encargados.interface';

export interface TiendaDTO {
  id: number;
  nombreTienda: string;
  direccion: string;
  latitud?: number;
  longitud?: number;
  telefono: string;
  idEncargado: EncargadoDTO["id"];
  nombreEncargado?: EncargadoDTO["nombre"];
  apepatEncargado?: EncargadoDTO["apepat"];
  apematEncargado?: EncargadoDTO["apemat"];
  correoEncargado?: EncargadoDTO["correo"];
};

export interface TiendaRequestDTO {
  nombreTienda: string;
  direccion: string;
  latitud?: number;
  longitud?: number;
  telefono: string;
  idEncargado: EncargadoDTO["id"];
};
