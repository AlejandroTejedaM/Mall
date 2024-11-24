import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {ProductoDTO, ProductoRequestDTO, ProductoRequestWithImageUrlDTO} from '../interfaces/productos.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = environment.apiUrl + '/productos';

  constructor(private http: HttpClient) {}

  getProductos() : Observable<ProductoDTO[]> {
    return this.http.get<ProductoDTO[]>(this.apiUrl);
  }
  addProducto(producto: ProductoRequestDTO): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  addProductoWithImageUrl(producto: ProductoRequestWithImageUrlDTO): Observable<any> {
    console.log(producto);
    return this.http.post(`${this.apiUrl}/WithImageUrl`, producto);
  }
  updateProducto(producto: ProductoDTO): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    return this.http.put(this.apiUrl, producto, {headers, responseType: 'text'});
  }

  getProductoById(id: number): Observable<ProductoDTO> {
    return this.http.get<ProductoDTO>(`${this.apiUrl}/${id}`);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
