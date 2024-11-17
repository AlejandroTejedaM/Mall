import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './almacen/pages/main-page/main-page.component';
import {NotFoundComponent} from './almacen/pages/not-found/not-found.component';
import {AgregarCategoriaComponent} from './almacen/components/categoria/agregar-categoria/agregar-categoria.component';
import {
  ActualizarCategoriaComponent
} from './almacen/components/categoria/actualizar-categoria/actualizar-categoria.component';

const routes: Routes = [
  {path: 'Categoria', component: MainPageComponent},
  {path: 'Categoria/Crear', component: AgregarCategoriaComponent},
  {path: 'Categoria/Actualizar/:id', component: ActualizarCategoriaComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
