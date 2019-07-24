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
  @Input() disabled;

  constructor() { }

  ngOnInit() {
  }

}
