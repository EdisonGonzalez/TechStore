import { ModeloProductos } from "./../interface/modelo-productos";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharingDataService {
  private cantCompras: number = 0;
  private dataCantidadCompras = new BehaviorSubject(this.cantCompras);
  currentCantidadCompras = this.dataCantidadCompras.asObservable();

  private prodSel: ModeloProductos[] = [];
  private dataProdsSel = new BehaviorSubject(this.prodSel);
  currentDataProdsSel = this.dataProdsSel.asObservable();

  private pageSel: number = 1;
  private dataPageSel = new BehaviorSubject(this.pageSel);
  currentPageSel = this.dataPageSel.asObservable();

  private search: string = "";
  private dataSearch = new BehaviorSubject(this.search);
  currentSearch = this.dataSearch.asObservable();

  constructor() {}

  changecurrentCantidadCompras(cantidad: number) {
    this.dataCantidadCompras.next(cantidad);
  }

  changecurrentDataProdsSel(productssel: ModeloProductos[]) {
    this.dataProdsSel.next(productssel);
  }

  changecurrentPageSel(page: number) {
    this.dataPageSel.next(page);
  }

  changecurrentDataSearch(search: string) {
    this.dataSearch.next(search);
  }
}
