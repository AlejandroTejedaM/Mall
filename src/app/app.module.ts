import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlmacenModule } from './almacen/almacen.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgregarTiendaComponent } from './almacen/components/tienda/agregar-tienda/agregar-tienda.component';
import { TablaTiendaComponent } from './almacen/components/tienda/tabla-tienda/tabla-tienda.component';
import { ActualizarTiendaComponent } from './almacen/components/tienda/actualizar-tienda/actualizar-tienda.component';
import {CategoriaComponent} from './almacen/components/categoria/tabla-categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlmacenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
