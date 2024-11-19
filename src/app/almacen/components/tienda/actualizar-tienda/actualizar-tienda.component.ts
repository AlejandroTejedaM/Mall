import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TiendaService} from '../../../services/tienda.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EncargadoDTO} from '../../../interfaces/encargados.interface';
import {EncargadoService} from '../../../services/encargado.service';

@Component({
  selector: 'app-actualizar-tienda',
  templateUrl: './actualizar-tienda.component.html',
  styleUrl: './actualizar-tienda.component.css'
})
export class ActualizarTiendaComponent implements OnInit {

  private id?: number;
  form: FormGroup;
  listaEncargados: EncargadoDTO[] = [];

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private tiendaService: TiendaService,
    private fb: FormBuilder,
    private encargadoService: EncargadoService
  ) {
    this.form = fb.group({
      id: [''],
      nombreTienda: [''],
      direccion: [''],
      latitud: [''],
      longitud: [''],
      telefono: [''],
      idEncargado: ['']
    });
  }

  loadTienda(id: number) {
    this.tiendaService.getTiendaById(id).subscribe((tienda) => {
      this.form.patchValue({
        id: tienda.id,
        nombreTienda: tienda.nombreTienda,
        direccion: tienda.direccion,
        latitud: tienda.latitud,
        longitud: tienda.longitud,
        telefono: tienda.telefono,
        idEncargado: tienda.idEncargado
      });
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.ar.snapshot.paramMap.get('id')!);
    this.loadTienda(this.id);
    this.encargadoService.getEncargados().subscribe(encargados => {
      this.listaEncargados = encargados;
    });
  }

  actualizarTienda() {
    if (!this.form.valid){
      return;
    }
    const tienda = this.form.value;
    this.tiendaService.updateTienda(tienda).subscribe(() => {
      this.navigateTo('Tiendas');
    });
  }

  navigateTo(tiendas: string) {
    this.router.navigate([tiendas]);
  }
}
