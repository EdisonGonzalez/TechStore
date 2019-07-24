import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';
import { ModeloProductos } from 'src/app/interface/modelo-productos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: ModeloProductos[];
  showData:boolean;

  constructor(private consumoApiService: ConsumoApiService) { }

  ngOnInit() {
    this.consumoApiService.getProducts().subscribe(
      data => {
        console.log("Respuesta Exitosa de getProducts: ", data);
        this.productos = data;
      },
      error => {
        console.log("Respuesta Fallida de getProducts: ", error);
      }
    );
  }

}
