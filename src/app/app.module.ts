import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatalogoComponent } from "./component/catalogo/catalogo.component";
import { PedidosComponent } from "./component/pedidos/pedidos.component";
import { ProductosComponent } from "./component/productos/productos.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { ModalComponent } from "./component/modal/modal.component";

import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from "./component/card/card.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "./pipe/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    PedidosComponent,
    ProductosComponent,
    NavBarComponent,
    ModalComponent,
    CardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
