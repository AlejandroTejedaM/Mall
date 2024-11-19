import {Component, OnInit} from '@angular/core';
import {CategoriaDTO} from '../../../interfaces/categorias.interface';
import {AlmacenService} from '../../../services/almacen.service';
import {ProductoService} from '../../../services/producto.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {delay} from 'rxjs';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent implements OnInit {

  listaCategorias: CategoriaDTO[] = [];
  form: FormGroup;
  mensajeError = '';
  mensajeExito = '';

  constructor(
    private categoriaService: AlmacenService,
    private productoService: ProductoService,
    private router: Router,
    frm: FormBuilder
  ) {
    this.form = frm.group({
      nombreProducto: ['', {validators: [Validators.required]}],
      stock : ['', {validators: [Validators.required]}],
      precio: ['', {validators: [Validators.required]}],
      idCategoria: ['', {validators: [Validators.required]}]
    });
  }

  async ngOnInit() {
    this.categoriaService.getCategoria().subscribe(categorias => {
      this.listaCategorias = categorias;
      if (this.listaCategorias.length > 0) {
        this.form.patchValue({idCategoria: this.listaCategorias[0].id});
      }
    }, (error: string) => {
      this.mensajeError = 'Error al cargar las categorias: ' + error;
    });

  }


  navigateTo(productos: string) {
    this.router.navigate([productos]);
  }

  guardarProducto() {
    const producto = this.form.value;
    this.productoService.addProducto(producto).subscribe(() => {
      this.mensajeExito = 'Producto agregado correctamente';
      delay(2000);
      this.navigateTo('Productos');
    }, error => {
      //managed error response status and message
      this.mensajeError = 'Error al agregar el producto: ' + error.status + ' ' + error.message;
    });
  }
}
