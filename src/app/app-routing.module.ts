import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './component/catalogo/catalogo.component';

const routes: Routes = [
  {path: '', component: CatalogoComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: '**', redirectTo: 'catalogo'},
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
