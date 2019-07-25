import { SharingDataService } from './../../service/sharing-data.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModeloProductos } from 'src/app/interface/modelo-productos';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() descripcion: string;
  @Input() cantidadDisponible: number;
  @Input() imagen: string;
  @Input() miniatura: string;
  @Input() idProducto: number;
  @Input() categoria: string;
  @Input() precio: number;
  imagenProd = null;
  display: string;

  disabled: boolean;
  productosSeleccionados: ModeloProductos[];
  cantidadCompras: number; //Provista desde el servicio, segun la cantidad de clicks
  productssel: ModeloProductos[]; //Valor que inicialmente traemos del servicio y que posteriormente compartimos a los productos
  productoCarta: ModeloProductos;
  constructor(private dataService: SharingDataService) { }

  ngOnInit() {
    if (this.cantidadDisponible === 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }

    this.dataService.currentCantidadCompras.subscribe(
      cantidad => {
        this.cantidadCompras = cantidad; //Obteniendo el valor del servicio
      });

    this.dataService.currentDataProdsSel.subscribe(
      productosClicks => {
        this.productssel = productosClicks; //Obteniendo el valor del servicio
      });
  }

  addCar() {
    this.disabled = true;
    this.dataService.changecurrentCantidadCompras(this.cantidadCompras + 1); //Sumando uno al badge (Y actualizando el servicio)
    this.productoCarta = {
      'descripcion': this.descripcion,
      'cantidadDisponible': this.cantidadDisponible,
      'imagen': this.imagen,
      'miniatura': this.miniatura,
      'idProducto': this.idProducto,
      'categoria': this.categoria,
      'precio': this.precio
    };
    this.productssel.push(this.productoCarta); //Agregando a los productos seleccionados
    this.dataService.changecurrentDataProdsSel(this.productssel); //Sumando un producto a la canasta temporal (Y actualizando el servicio)
  }

  openModal(img) {
    this.imagenProd = img;
    console.log(this.imagenProd);
  }

}
