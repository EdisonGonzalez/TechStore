import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() imagenProd;
  @Input() id;

  display: any;
  constructor() { }

  ngOnInit() {
   console.log(this.imagenProd);

  }

  openModal(img) {
    // console.log(this.imagen);
    this.display = 'block';
  }

}
