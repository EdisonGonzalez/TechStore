import { SharingDataService } from "./../../service/sharing-data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  cantidadCompras: number;
  inputItem: string;

  constructor(private dataService: SharingDataService) {}

  ngOnInit() {
    this.dataService.currentCantidadCompras.subscribe(cantidad => {
      this.cantidadCompras = cantidad;
    });
  }

  onChange(event: any) {
    this.dataService.changecurrentDataSearch(event);
  }
}
