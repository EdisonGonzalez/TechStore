import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { ProductosComponent } from './component/productos/productos.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ModalComponent } from './component/modal/modal.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    PedidosComponent,
    ProductosComponent,
    NavBarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
