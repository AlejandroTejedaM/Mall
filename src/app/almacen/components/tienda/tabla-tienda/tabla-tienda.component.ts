import { Component } from '@angular/core';
import {TiendaDTO} from '../../../interfaces/tiendas.interface';
import {Router} from '@angular/router';
import {TiendaService} from '../../../services/tienda.service';

@Component({
  selector: 'app-tabla-tienda',
  templateUrl: './tabla-tienda.component.html',
  styleUrl: './tabla-tienda.component.css'
})
export class TablaTiendaComponent {
  listaTiendas: TiendaDTO[] = [];
  router : Router;

  constructor(router: Router, private tiendaService: TiendaService) {
    this.router = router;
    this.refrescarTiendas();
  }

  navigateTo(route: String) {
    this.router.navigate([route]).then(r => console.log(r));
  }

  refrescarTiendas() {
    this.tiendaService.getTiendas().subscribe((tiendas: TiendaDTO[]) => {
      console.log(tiendas);
      this.listaTiendas = tiendas;
    });
  }
  eliminarTienda(id: number) {
    this.tiendaService.deleteTienda(id).subscribe(() => {
      this.refrescarTiendas()
    });
  }
}
