import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlmacenService} from '../../../services/almacen.service';
import { Router } from '@angular/router';
import {CategoriaRequestDTO} from '../../../interfaces/categorias.interface';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css'
})

export class AgregarCategoriaComponent {

  form : FormGroup
  servicioCategoria: AlmacenService;
  router: Router;
  constructor(private fb : FormBuilder, private almacenService: AlmacenService, router: Router) {
    this.form = this.fb.group({
      nombreCategoria: ['', {validators: [Validators.required]}]
    });
    this.servicioCategoria = almacenService;
    this.router = router;
  }

  guardarCategoria() {
    if (!this.form.valid){
      return;
    }
    const categoria = this.form.value as CategoriaRequestDTO;
    this.servicioCategoria.addCategoria(categoria).subscribe(() => {
      this.router.navigate(['/Categorias']);
    });
  }

  navigateTo(categorias: string) {
    this.router.navigate([categorias]);
  }
}
