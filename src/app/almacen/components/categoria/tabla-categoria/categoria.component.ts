import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoriaDTO} from '../../../interfaces/categorias.interface';
import {AlmacenService} from '../../../services/almacen.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.ts'
})
export class CategoriaComponent implements OnInit {

  listaCategorias: CategoriaDTO[] = [];
  router: Router;
  constructor(private almacenService: AlmacenService, router: Router) {
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
