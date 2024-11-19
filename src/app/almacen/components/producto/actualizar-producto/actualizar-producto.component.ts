import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlmacenService} from '../../../services/almacen.service';
import {ProductoService} from '../../../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {delay} from 'rxjs';
import {CategoriaDTO} from '../../../interfaces/categorias.interface';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent implements OnInit {
  form: FormGroup;
  mensajeError = '';
  mensajeExito = '';
  listaCategorias: CategoriaDTO[] = [];
  id?: number;
  constructor(
    private categoriaService: AlmacenService,
    private productoService: ProductoService,
    private router: Router,
    frm: FormBuilder,
    private ar: ActivatedRoute
  ) {
    this.form = frm.group({
      nombreProducto: ['', {validators: [Validators.required]}],
      stock : ['', {validators: [Validators.required]}],
      precio: ['', {validators: [Validators.required]}],
      idCategoria: ['', {validators: [Validators.required]}]
    });
  }

  async ngOnInit() {
    this.id = parseInt(this.ar.snapshot.paramMap.get('id')!);
    this.categoriaService.getCategoria().subscribe(categorias => {
      this.listaCategorias = categorias;
      if (this.listaCategorias.length > 0) {
        this.form.patchValue({idCategoria: this.listaCategorias[0].id});
      }
    }, (error: string) => {
      this.mensajeError = 'Error al cargar las categorias: ' + error;
    });
    this.loadProducto(this.id);
  }

  loadProducto(id: number) {
    this.productoService.getProductoById(id).subscribe(producto => {
      this.form.patchValue(
        {
          nombreProducto: producto.nombreProducto,
          stock: producto.stock,
          precio: producto.precio,
          idCategoria: producto.idCategoria
        }
      );
    }, error => {
      this.mensajeError = 'Error al cargar el producto: ' + error.status + ' ' + error.message;
    });
  }

  actualizarProducto() {
    if (!this.form.valid) {
      return;
    }
    const producto = this.form.value;
    producto.id = this.id;
    this.productoService.updateProducto(producto).subscribe(() => {
      this.mensajeExito = 'Producto actualizado correctamente';
      delay(2000);
      this.navigateTo('Productos');
    }, error => {
      this.mensajeError = 'Error al actualizar el producto: ' + error.status + ' ' + error.message;
    });
  }

  navigateTo(productos: string) {
    this.router.navigate([productos]);
  }
}
