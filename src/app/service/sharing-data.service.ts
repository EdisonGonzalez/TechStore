import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  // Bandera para cambiar badge de productos
  private cantCompras: number = 0; //Valor por defecto
  private dataCantidadCompras = new BehaviorSubject(this.cantCompras);
  currentCantidadCompras = this.dataCantidadCompras.asObservable();

  constructor() { }

  // Funcion para cambiar el bagde
  changecurrentCantidadCompras(cantidad: number){
    this.dataCantidadCompras.next(cantidad);
  }
}
