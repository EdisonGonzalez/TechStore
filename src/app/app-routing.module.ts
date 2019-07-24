import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { ProductosComponent } from './component/productos/productos.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'producto', component: ProductosComponent},
  {path: '**', redirectTo: 'catalogo'},
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
