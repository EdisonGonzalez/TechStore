import { Component, OnInit } from "@angular/core";
import { ModeloSolicitud } from "src/app/interface/modelo-solicitud";
import { SharingDataService } from "src/app/service/sharing-data.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.css"]
})
export class PedidosComponent implements OnInit {
  prodSolicitados: ModeloSolicitud[];
  total: number[] = [];
  totalunico: number = 0;
  inputData: string;

  constructor(private dataService: SharingDataService) {}

  ngOnInit() {
    this.dataService.changecurrentDataProdsSel([]);
    this.dataService.changecurrentCantidadCompras(0);
    this.obtener_localstorage("pedidos");
    this.dataService.changecurrentPageSel(3);
    this.dataService.currentSearch.subscribe(inputSearch => {
      this.inputData = inputSearch;
    });
  }

  obtener_localstorage(item: string) {
    if (JSON.parse(localStorage.getItem(item)) == null) {
      this.prodSolicitados = [];
    } else {
      this.prodSolicitados = JSON.parse(localStorage.getItem(item));
      this.prodSolicitados.forEach(element => {
        let pedidos = element.pedidos;
        this.totalunico = 0;
        pedidos.forEach(element2 => {
          this.totalunico += element2.producto.precio * element2.cantidad;
        });
        this.total.push(this.totalunico);
      });
    }
  }
}
