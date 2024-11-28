import {NgModule} from "@angular/core";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {provideHttpClient} from '@angular/common/http';
import { AgregarCategoriaComponent } from './components/categoria/agregar-categoria/agregar-categoria.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ActualizarCategoriaComponent } from './components/categoria/actualizar-categoria/actualizar-categoria.component';
import {CategoriaComponent} from './components/categoria/tabla-categoria/categoria.component';
import {TablaTiendaComponent} from './components/tienda/tabla-tienda/tabla-tienda.component';
import {AgregarTiendaComponent} from './components/tienda/agregar-tienda/agregar-tienda.component';
import {ActualizarTiendaComponent} from './components/tienda/actualizar-tienda/actualizar-tienda.component';
import { AgregarProductoComponent } from './components/producto/agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
import { TablaProductoComponent } from './components/producto/tabla-producto/tabla-producto.component';
import { InputImgComponent } from './components/input-img/input-img.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NotFoundComponent,
    AgregarCategoriaComponent,
    ActualizarCategoriaComponent,
    CategoriaComponent,
    TablaTiendaComponent,
    AgregarTiendaComponent,
    ActualizarTiendaComponent,
    AgregarProductoComponent,
    ActualizarProductoComponent,
    TablaProductoComponent,
    InputImgComponent,
    MapaComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AlmacenModule {

}
