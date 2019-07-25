import { ConsumoApiService } from './../../service/consumo-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModeloProductos } from 'src/app/interface/modelo-productos';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: ModeloProductos[];
  disabled: boolean;
  data: any[];
  @ViewChild('modalProd') modalProd: ModalComponent;

  constructor(private consumoApiService: ConsumoApiService) { }

  ngOnInit() {
    this.consumoApiService.getProducts().subscribe(
      data => {
        this.data = data;
        console.log("Respuesta Exitosa de getProducts: ", data);
        this.productos = data;
      },
      error => {
        console.log("Respuesta Fallida de getProducts: ", error);
      }
    );
  }
}
