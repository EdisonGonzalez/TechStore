import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/service/sharing-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cantidadCompras: number; //Provista desde el servicio, segun la cantidad de clicks

  constructor(private dataService: SharingDataService) { }

  ngOnInit() {
    //Obteniendo el valor de la cantidad de compras del sevicio
    this.dataService.currentCantidadCompras.subscribe(
      cantidad => {
        this.cantidadCompras = cantidad;
      }
    )
  }

}
