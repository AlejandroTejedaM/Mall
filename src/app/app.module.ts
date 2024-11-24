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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

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
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"socialraccoon-990a3","appId":"1:439486310444:web:ee215eb9ab5fe5d4648989","storageBucket":"socialraccoon-990a3.appspot.com","apiKey":"AIzaSyAddxCWt72hRfDBOE32X9heo7R0n-nS_Rw","authDomain":"socialraccoon-990a3.firebaseapp.com","messagingSenderId":"439486310444","measurementId":"G-0FR522G0HY"})),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
