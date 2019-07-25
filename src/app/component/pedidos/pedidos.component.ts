import { Component, OnInit } from '@angular/core';
import { ModeloSolicitud } from 'src/app/interface/modelo-solicitud';
import { SharingDataService } from 'src/app/service/sharing-data.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  prodSolicitados: ModeloSolicitud[]; //Arreglo de las solicitudes
  total: number[] = []; //Arreglo que contiene la Suma de los pedido pero por pedido
  totalunico: number = 0; //Calculo de uno solo
  inputData: string; //Lo que viene del servicio

  constructor(private dataService: SharingDataService) { }

  ngOnInit() {
    //Limpiando los productos seleccionados
    this.dataService.changecurrentDataProdsSel([]); //Primero la lista de productos
    this.dataService.changecurrentCantidadCompras(0); //Segundo el badge e indicativo

    //Obteniendo Locale Storage para mostrar en pantalla
    this.obtener_localstorage("pedidos");

    this.dataService.changecurrentPageSel(3); //3 - Pagina de Pedidos
    this.dataService.currentSearch.subscribe(
      inputSearch => {
        this.inputData = inputSearch;
        console.log("La data traida del input del navbar a pedidos es: ", this.inputData);
      }
    )
  }

  //Funcion para traer las solicitudes
  obtener_localstorage(item: string){
    if(JSON.parse(localStorage.getItem(item)) == null){
      console.log("Locale Storage vacio");
      this.prodSolicitados = [];
    } else {
      this.prodSolicitados = JSON.parse(localStorage.getItem(item));
      console.log("Locale Storage NO ESTA Vacio");
      for (var i = 0; i < this.prodSolicitados.length; i++) {

      }
      this.prodSolicitados.forEach(element => {
        //console.log("Primer elemento traido: ", element);
        //console.log("Ingreso a pedidos del elemento: ", element.pedidos);
        let pedidos = element.pedidos;
        this.totalunico = 0;
        pedidos.forEach(element2 => {
          //console.log("Segundo elemento2 traido: ", element2);
          //console.log("Ingreso a producto del elemento2: ", element2.producto);
          //console.log("Ingreso a precios del producto del elemento2: ", element2.producto.precio);
          this.totalunico += element2.producto.precio * element2.cantidad;
        });
        this.total.push(this.totalunico);
      });
      console.log("ARREGLO TOTALES: ", this.total);

    }
    console.log("Obtenido del locale Storage: ", this.prodSolicitados);
  }

}
