import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlmacenService} from '../../../services/almacen.service';
import {CategoriaDTO} from '../../../interfaces/categorias.interface';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrl: './actualizar-categoria.component.css'
})
export class ActualizarCategoriaComponent implements OnInit{

  form: FormGroup;
  servicioCategoria: AlmacenService;
  router: Router;
  id?: number;
  categoria? : CategoriaDTO;
  activatedRoute: ActivatedRoute;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private rt: Router,
    private ar: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id: ['', {validators: [Validators.required]}],
      nombreCategoria: ['', {validators: [Validators.required]}]
    });
    this.servicioCategoria = almacenService;
    this.router = rt;
    this.activatedRoute = ar;
  }

  loadCategoria(id: number) {
    this.servicioCategoria.getCategoriaById(id).subscribe((categoria) => {
      this.categoria = categoria;
      this.form.patchValue({
        id: categoria.id,
        nombreCategoria : categoria.nombreCategoria
      });
    });
  }

  actualizarCategoria() {
    if (!this.form.valid){
      return;
    }
    const categoria = this.form.value;
    this.servicioCategoria.updateCategoria(categoria).subscribe(() => {
      this.router.navigate(['/Categorias']);
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.loadCategoria(this.id);
  }

  navigateTo(categorias: string) {
    this.router.navigate([categorias]);
  }
}
