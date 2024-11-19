import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {EncargadoDTO, EncargadoRequestDTO} from '../interfaces/encargados.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  private apiUrl = environment.apiUrl + '/encargados';
  constructor(private http: HttpClient) {}

  getEncargados(): Observable<EncargadoDTO[]> {
    return this.http.get<EncargadoDTO[]>(this.apiUrl);
  }

  addEncargado(encargado: EncargadoRequestDTO): Observable<any> {
    return this.http.post(this.apiUrl, encargado);
  }

  updateEncargado(encargado: EncargadoDTO): Observable<any> {
    return this.http.put(this.apiUrl, encargado);
  }

  getEncargadoById(id: number): Observable<EncargadoDTO> {
    return this.http.get<EncargadoDTO>(`${this.apiUrl}/${id}`);
  }

  deleteEncargado(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  login(usuario: string, pwd: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', {usuario, pwd});
  }

  getRoles(): Observable<any> {
    return this.http.get(environment.apiUrl + '/roles');
  }

  getEncargadoByUsuario(usuario: string): Observable<EncargadoDTO> {
    return this.http.get<EncargadoDTO>(`${this.apiUrl}/usuario/${usuario}`);
  }

  getEncargadoByCorreo(correo: string): Observable<EncargadoDTO> {
    return this.http.get<EncargadoDTO>(`${this.apiUrl}/correo/${correo}`);
  }

  getEncargadoByTelefono(telefono: string): Observable<EncargadoDTO> {
    return this.http.get<EncargadoDTO>(`${this.apiUrl}/telefono/${telefono}`);
  }
}
