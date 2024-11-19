import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './almacen/pages/main-page/main-page.component';
import {NotFoundComponent} from './almacen/pages/not-found/not-found.component';
import {AgregarCategoriaComponent} from './almacen/components/categoria/agregar-categoria/agregar-categoria.component';
import {
  ActualizarCategoriaComponent
} from './almacen/components/categoria/actualizar-categoria/actualizar-categoria.component';
import {CategoriaComponent} from './almacen/components/categoria/tabla-categoria/categoria.component';
import {TablaTiendaComponent} from './almacen/components/tienda/tabla-tienda/tabla-tienda.component';
import {AgregarTiendaComponent} from './almacen/components/tienda/agregar-tienda/agregar-tienda.component';
import {ActualizarTiendaComponent} from './almacen/components/tienda/actualizar-tienda/actualizar-tienda.component';
import {TablaProductoComponent} from './almacen/components/producto/tabla-producto/tabla-producto.component';
import {AgregarProductoComponent} from './almacen/components/producto/agregar-producto/agregar-producto.component';
import {
  ActualizarProductoComponent
} from './almacen/components/producto/actualizar-producto/actualizar-producto.component';

const routes: Routes = [
  {path: 'Categorias', component: CategoriaComponent},
  {path: 'Categorias/Crear', component: AgregarCategoriaComponent},
  {path: 'Categorias/Actualizar/:id', component: ActualizarCategoriaComponent},
  {path: 'Tiendas', component: TablaTiendaComponent},
  {path: 'Tiendas/Crear', component: AgregarTiendaComponent},
  {path: 'Tiendas/Actualizar/:id', component: ActualizarTiendaComponent},
  {path: 'Productos', component: TablaProductoComponent},
  {path: 'Productos/Crear', component: AgregarProductoComponent},
  {path: 'Productos/Actualizar/:id', component: ActualizarProductoComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
