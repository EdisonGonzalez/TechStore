import { ModeloProductos } from './../interface/modelo-productos';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  // Bandera para cambiar badge de productos
  private cantCompras: number = 0; //Valor por defecto -> 0
  private dataCantidadCompras = new BehaviorSubject(this.cantCompras);
  currentCantidadCompras = this.dataCantidadCompras.asObservable();

  // Variable para enviar a productos seleccionados
  private prodSel: ModeloProductos[] = []; //Valor por defecto -> Vacio
  private dataProdsSel = new BehaviorSubject(this.prodSel);
  currentDataProdsSel = this.dataProdsSel.asObservable();

  // Variable para saber en que pagina se ejecuta el pipe o filtro
  private pageSel: number = 1; //1 tienda, 2 productos, 3 pedidos - por defecto en tienda
  private dataPageSel = new BehaviorSubject(this.pageSel);
  currentPageSel = this.dataPageSel.asObservable();

  // Valor de la variable del input search del navbar compartida con los siblings de catalogo (tienda) y pedidos
  private search: string = "";
  private dataSearch = new BehaviorSubject(this.search);
  currentSearch = this.dataSearch.asObservable();

  constructor() { }

  // Funcion para cambiar el bagde
  changecurrentCantidadCompras(cantidad: number){
    this.dataCantidadCompras.next(cantidad);
  }

  // Funcion para agregar la cantidad de productos seleccionados
  changecurrentDataProdsSel(productssel: ModeloProductos[]){
    this.dataProdsSel.next(productssel);
  }

  // Funcion para modificar el numero de la página seleccionada (1 tienda, 2 productos, 3 pedidos)
  changecurrentPageSel(page: number){
    this.dataPageSel.next(page);
    console.log("Pagina actual: #", page);
  }

  // Funcion para modificar el valor de la variable del inputsearch
  changecurrentDataSearch(search: string){
    this.dataSearch.next(search);
  }
}
