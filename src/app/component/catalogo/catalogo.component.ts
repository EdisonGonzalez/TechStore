import { ConsumoApiService } from './../../service/consumo-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModeloProductos } from 'src/app/interface/modelo-productos';
import { ModalComponent } from '../modal/modal.component';
import { SharingDataService } from 'src/app/service/sharing-data.service';

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
  inputData: string;

  constructor(
    private consumoApiService: ConsumoApiService,
    private dataService: SharingDataService
    ) { }

  ngOnInit() {
    //Limpiando los productos seleccionados
    this.dataService.changecurrentDataProdsSel([]); //Primero la lista de productos
    this.dataService.changecurrentCantidadCompras(0); //Segundo el badge e indicativo
    //Luego obtenemos los productos a listar
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
    this.dataService.changecurrentPageSel(1); //1 - Pagina de Catalogo
    this.dataService.currentSearch.subscribe(
      inputSearch => {
        this.inputData = inputSearch;
        console.log("La data traida del input del navbar a catalogo es: ", this.inputData);
      }
    )
  }
}
