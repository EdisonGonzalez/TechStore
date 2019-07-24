import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() img;
  @Input() descripcion;
  @Input() precio;
  @Input() cantidadDisponible;
  disabled:boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.cantidadDisponible);
    if (this.cantidadDisponible === 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  addCar(){
    this.disabled = true;
  }

}
