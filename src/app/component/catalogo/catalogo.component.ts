import { ConsumoApiService } from "./../../service/consumo-api.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ModeloProductos } from "src/app/interface/modelo-productos";
import { ModalComponent } from "../modal/modal.component";
import { SharingDataService } from "src/app/service/sharing-data.service";

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo.component.html",
  styleUrls: ["./catalogo.component.css"]
})
export class CatalogoComponent implements OnInit {
  productos: ModeloProductos[];
  disabled: boolean;
  data: any[];
  @ViewChild("modalProd") modalProd: ModalComponent;
  inputData: string;

  constructor(
    private consumoApiService: ConsumoApiService,
    private dataService: SharingDataService
  ) {}

  ngOnInit() {
    this.dataService.changecurrentDataProdsSel([]);
    this.dataService.changecurrentCantidadCompras(0);
    this.consumoApiService.getProducts().subscribe(
      data => {
        this.data = data;

        this.productos = data;
      },
      error => {}
    );
    this.dataService.changecurrentPageSel(1);
    this.dataService.currentSearch.subscribe(inputSearch => {
      this.inputData = inputSearch;
    });
  }
}
