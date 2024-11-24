import {Component, OnInit} from '@angular/core';
import {CategoriaDTO} from '../../../interfaces/categorias.interface';
import {AlmacenService} from '../../../services/almacen.service';
import {ProductoService} from '../../../services/producto.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {getDownloadURL, ref, Storage as StorageFB, uploadBytes} from '@angular/fire/storage';
import {ProductoDTO, ProductoRequestDTO, ProductoRequestWithImageUrlDTO} from '../../../interfaces/productos.interface';
import { v4 as uuidv4 } from 'uuid';

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
    private storage: StorageFB,
    frm: FormBuilder
  ) {
    this.form = frm.group({
      nombreProducto: ['', {validators: [Validators.required]}],
      stock: ['', {validators: [Validators.required]}],
      precio: ['', {validators: [Validators.required]}],
      idCategoria: ['', {validators: [Validators.required]}],
      foto: ['', {validators: [Validators.required]}]
    });
  }

  async ngOnInit(): Promise<void> {
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

  async guardarProducto() {
    const producto : ProductoRequestWithImageUrlDTO = {
      nombreProducto: this.form.controls['nombreProducto'].value,
      stock: this.form.controls['stock'].value,
      precio: this.form.controls['precio'].value,
      idCategoria: this.form.controls['idCategoria'].value,
      imagen: ''
    }
    const randomFileName = `jq4b/${uuidv4()}_${this.form.controls['foto'].value.name}`;

    const imgref = ref(this.storage, randomFileName);

    const uploadResult = await uploadBytes(imgref, this.form.controls['foto'].value);
    console.log(uploadResult);
    producto.imagen = await getDownloadURL(imgref);

    if (!this.form.valid) {
      return;
    }
    console.log(producto);
    this.productoService.addProductoWithImageUrl(producto).subscribe(() => {
      this.mensajeExito = 'Producto agregado correctamente';
      //this.navigateTo('Productos');
    }, error => {
      //managed error response status and message
      this.mensajeError = 'Error al agregar el producto: ' + error.status + ' ' + error.message;
    });
  }

  archivoSeleccionado(file: File) {
    this.form.controls['foto'].setValue(file);
  }
}
