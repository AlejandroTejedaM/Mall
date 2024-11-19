import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TiendaDTO, TiendaRequestDTO} from '../interfaces/tiendas.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private apiUrl = environment.apiUrl + '/tiendas';

  constructor(private http: HttpClient) {}

  getTiendas(): Observable<TiendaDTO[]> {
    return this.http.get<TiendaDTO[]>(this.apiUrl);
  }

  addTienda(tienda: TiendaRequestDTO): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.apiUrl, tienda, {headers, responseType: 'text'});
  }

  updateTienda(tienda: TiendaDTO): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.apiUrl, tienda, {headers, responseType: 'text'});
  }

  getTiendaById(id: number): Observable<TiendaDTO> {
    return this.http.get<TiendaDTO>(`${this.apiUrl}/${id}`);
  }

  deleteTienda(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id, {responseType: 'text'});
  }
}
