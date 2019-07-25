import { SharingDataService } from './../../service/sharing-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cantidadCompras: number; //Provista desde el servicio, segun la cantidad de clicks
  inputItem: string; //Item ingresado en el search

  constructor(private dataService: SharingDataService) { }

  ngOnInit() {
    //Obteniendo el valor de la cantidad de compras del sevicio
    this.dataService.currentCantidadCompras.subscribe(
      cantidad => {
        this.cantidadCompras = cantidad;
      }
    )
  }

  onChange(event: any) {
    console.log(event);
    //this.inputItem = event;
    this.dataService.changecurrentDataSearch(event); //Enviando al comun que se encuentra en que valor se encuentra el search
  }
}
