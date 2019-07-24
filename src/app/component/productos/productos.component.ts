import { CITIES } from './../../const/CITIES';
import { SharingDataService } from './../../service/sharing-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModeloProductos } from 'src/app/interface/modelo-productos';
import { log } from 'util';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {//AfterViewInit { //OnInit {

  productssel: ModeloProductos[]; //Valor que obtenemos del servicio compartido entre componentes
  cantidad: number[][];
  //foo: any[];
  foo: Array<number>[];
  matrix: number[][] = [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]];

  public things: number[][];

  matriz = [];
  ciudades: String[] = CITIES;

  constructor(private dataService: SharingDataService) {
    this.things = [];
    for(var i: number = 0; i < 10; i++) {
      this.things[i] = [];
      for(var j: number = 1; j<= 10; j++) {
          this.things[i][j] = j;
      }
  }

    this.dataService.currentDataProdsSel.subscribe(
      productosClicks => {
        //debugger;
        this.productssel = productosClicks; //Obteniendo el valor del servicio
        this.matrix[0] = [1, 2, 3, 4, 5];
        //this.matriz.push(new Array(10).fill(0).map((e,i)=>i+1));
        debugger;
        //console.log(productosClicks);
        //console.log(this.productssel);
        //this.foo = new Array(this.productssel[0].cantidadDisponible).fill(0).map((e,i)=>i+1);
        /*
        for (var i = 0; i <= this.productssel.length; i++) {
          for(var j=1; j <= this.productssel[i].cantidadDisponible; j++) {
            this.cantidad[i][j-1] = j;
            console.log(this.cantidad);
          }
       }*/
      }
    )
  }

  ngOnInit() {
    //ngAfterViewInit(){
      /*
    this.dataService.currentDataProdsSel.subscribe(
      productosClicks => {
        debugger;
        this.productssel = productosClicks; //Obteniendo el valor del servicio
        this.matriz[0] = new Array(10).fill(0).map((e,i)=>i+1);
        //console.log(productosClicks);
        //console.log(this.productssel);
        //this.foo = new Array(this.productssel[0].cantidadDisponible).fill(0).map((e,i)=>i+1);
        /*
        for (var i = 0; i <= this.productssel.length; i++) {
          for(var j=1; j <= this.productssel[i].cantidadDisponible; j++) {
            this.cantidad[i][j-1] = j;
            console.log(this.cantidad);
          }
       }*/
       /*
      },
      error => {
        console.log(error);
      }
    )
*/

    console.log("Arreglo numeros", this.foo[0]);
  }

}
