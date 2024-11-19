import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TiendaService} from '../../../services/tienda.service';
import {Router} from '@angular/router';
import {EncargadoDTO} from '../../../interfaces/encargados.interface';
import {EncargadoService} from '../../../services/encargado.service';

@Component({
  selector: 'app-agregar-tienda',
  templateUrl: './agregar-tienda.component.html',
  styleUrl: './agregar-tienda.component.css'
})
export class AgregarTiendaComponent {

  form : FormGroup;
  router: Router;
  listaEncargados: EncargadoDTO[] = [];
  constructor(private fb : FormBuilder, private tiendaService: TiendaService, router: Router, private encargadoService: EncargadoService) {
    this.form = this.fb.group({
      nombreTienda: ['', {validators: [Validators.required]}],
      direccion: ['', {validators: [Validators.required]}],
      latitud: ['', {validators: [Validators.required]}],
      longitud: ['', {validators: [Validators.required]}],
      telefono: ['', {validators: [Validators.required]}],
      idEncargado: ['', {validators: [Validators.required]}]
    });
    this.router = router;
    this.encargadoService.getEncargados().subscribe(encargados => {
      this.listaEncargados = encargados;
      if (this.listaEncargados.length > 0) {
        this.form.patchValue({ idEncargado: this.listaEncargados[0].id });
      }
      this.obtenerUbicacion();
    });
  }

  obtenerUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.form.patchValue({ latitud: position.coords.latitude, longitud: position.coords.longitude });
      });
    }
  }
  guardarTienda() {
    if (!this.form.valid){
      return;
    }
    const tienda = this.form.value;
    this.tiendaService.addTienda(tienda).subscribe(() => {
      this.router.navigate(['/Tiendas']);
    });
  }

  navigateTo(tienda: string) {
    this.router.navigate([tienda]);
  }
}
