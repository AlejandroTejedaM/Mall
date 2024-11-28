import {Component} from '@angular/core';
import {control, tileLayer} from 'leaflet';
import zoom = control.zoom;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

  public options: {} = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; OpenStreetMap contributors'
        }
      )
    ],
    zoom: 5,
    center: [19.8827, -97.3929]
  }
}
