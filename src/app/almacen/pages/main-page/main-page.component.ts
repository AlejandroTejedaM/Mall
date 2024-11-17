import {Component, OnInit} from '@angular/core';
import {Producto} from '../../interfaces/producto.interface';
import {AlmacenService} from '../../services/almacen.service';
import {CategoriaDTO} from '../../interfaces/categorias.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-almacen-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {

  listaProductos: Producto[] = [];
  listaCategorias: CategoriaDTO[] = [];
  router: Router;
  constructor(private almacenService: AlmacenService, router: Router) {
    this.listaProductos = almacenService.listaProductos;
    this.almacenService.getCategoria().subscribe((categorias: CategoriaDTO[]) => {
      this.listaCategorias = categorias;
    });
    this.router = router;
  }
  ngOnInit(): void {

  }

  navigateTo(route : String) {
    this.router.navigate([route]);
  }

  eliminarCategoria(id: number) {
    this.almacenService.deleteCategoria(id).subscribe(() => {
      this.almacenService.getCategoria().subscribe((categorias: CategoriaDTO[]) => {
        this.listaCategorias = categorias;
      });
    });
  }
}
