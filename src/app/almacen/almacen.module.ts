import {NgModule} from "@angular/core";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {CommonModule} from "@angular/common";
import {ListaProductosComponent} from './components/lista-productos/lista-productos.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {provideHttpClient} from '@angular/common/http';
import { AgregarCategoriaComponent } from './components/categoria/agregar-categoria/agregar-categoria.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ActualizarCategoriaComponent } from './components/categoria/actualizar-categoria/actualizar-categoria.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProductoComponent,
    ListaProductosComponent,
    NotFoundComponent,
    AgregarCategoriaComponent,
    ActualizarCategoriaComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AlmacenModule {

}
