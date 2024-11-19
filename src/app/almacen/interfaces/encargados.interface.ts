import {RolDTO} from "./rol.interface";

export interface EncargadoDTO {
  id: number;
  nombre: string;
  apepat: string;
  apemat: string;
  telefono: string;
  correo: string;
  usuario: string;
  pwd: string;
  idRol: RolDTO["id"];
  rol?: string;
}

export interface EncargadoRequestDTO {
  nombre: string;
  apepat: string;
  apemat: string;
  telefono: string;
  correo: string;
  usuario: string;
  pwd: string;
  idRol: RolDTO["id"];
}
