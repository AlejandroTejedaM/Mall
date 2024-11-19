import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriaDTO, CategoriaRequestDTO} from '../interfaces/categorias.interface';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private apiUrl = environment.apiUrl + '/categorias';

  constructor(private http : HttpClient) { }

  getCategoria(): Observable<CategoriaDTO[]>{
    return this.http.get<CategoriaDTO[]>(this.apiUrl);
  }

  addCategoria(categoria: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, categoria, { headers, responseType: 'text' });
  }

  updateCategoria(categoria: CategoriaDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.apiUrl, categoria, { headers, responseType: 'text' });
  }

  getCategoriaById(id: number): Observable<CategoriaDTO> {
    return this.http.get<CategoriaDTO>(`${this.apiUrl}/${id}`);
  }
  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id, {responseType: 'text'});
  }
}
