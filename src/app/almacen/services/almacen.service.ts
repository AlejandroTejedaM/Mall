import {Injectable} from '@angular/core';
import {Producto} from '../interfaces/producto.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriaDTO, CategoriaRequestDTO} from '../interfaces/categorias.interface';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  listaProductos: Producto[] = [
    {
      nombre: 'Chocolate',
      precio: 14.50,
      stock: 0,
      precioOferta: 10,
      imagen: 'https://static.vecteezy.com/system/resources/previews/009/769/290/non_2x/chocolate-bar-flat-icon-free-vector.jpg',
      fecha: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    },
    {
      nombre: 'Pulparindo',
      precio: 4.50,
      stock: 2,
      imagen: 'https://www.mundofiesta.mx/wp-content/uploads/Pulparindo-Original-20-piezas-14-grs.png',
      fecha: new Date()
    },
    {
      nombre: 'Cacahuates',
      precio: 10.50,
      stock: 3,
      precioOferta: 10,
      imagen: 'https://emojitool.com/img/apple/ios-10.3/peanuts-4001.png',
      fecha: new Date()
    },
  ];
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
