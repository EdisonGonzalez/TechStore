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

  constructor() { }

  // Funcion para cambiar el bagde
  changecurrentCantidadCompras(cantidad: number){
    this.dataCantidadCompras.next(cantidad);
  }

  // Funcion para agregar la cantidad de productos seleccionados
  changecurrentDataProdsSel(productssel: ModeloProductos[]){
    this.dataProdsSel.next(productssel);
  }
}
