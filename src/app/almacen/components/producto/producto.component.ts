import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-almacen-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  /*nombre: string = "Pepsi";
  stock: number = 3;
  productos : any[] = ["Galletas","Chocolate","Pulparindo","Cacahuates"]

  comprarProducto(): void {
    this.stock -= 1;
  }*/

    @Input()
    producto : Producto = {
      nombre : 'Sin nombre',
      precio : 0,
      precioOferta: 0,
      stock : 0,
      imagen : '',
      fecha : new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    }


}
