import { Component } from '@angular/core';
import {ProductoDTO} from '../../../interfaces/productos.interface';
import {ProductoService} from '../../../services/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrl: './tabla-producto.component.css'
})
export class TablaProductoComponent {
  listaProductos: ProductoDTO[] = [];

  constructor(private productoService: ProductoService, private router: Router) {
    this.refrescarProductos();
  }

  refrescarProductos() {
    this.productoService.getProductos().subscribe((productos: ProductoDTO[]) => {
      this.listaProductos = productos;
    });
  }

  navigateTo(route: String) {
    this.router.navigate([route]);
  }

  eliminarProducto(id: number) {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.refrescarProductos();
    });
  }
}
