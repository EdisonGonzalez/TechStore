import { Pipe, PipeTransform } from "@angular/core";
import { ModeloProductos } from "../interface/modelo-productos";
import { ModeloSolicitud } from "../interface/modelo-solicitud";
import { SharingDataService } from "../service/sharing-data.service";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  paginaFiltro: number;
  productos: ModeloProductos[];
  pedidosSolicitados: ModeloSolicitud[];
  terminoBuscar: string;

  constructor(private dataService: SharingDataService) {
    this.dataService.currentPageSel.subscribe(paginaSel => {
      this.paginaFiltro = paginaSel;
    });
  }

  transform(value: any, arg: any): any {
    if (this.paginaFiltro == 1) {
      this.productos = value;
      this.terminoBuscar = arg;
      if (!value || !arg) {
        return this.productos;
      }
      return this.productos.filter(producto => {
        return (
          producto.descripcion
            .toLowerCase()
            .indexOf(this.terminoBuscar.toLowerCase()) !== -1
        );
      });
    } else if (this.paginaFiltro == 3) {
      this.pedidosSolicitados = value;
      this.terminoBuscar = arg;
      if (!value || !arg) {
        return this.pedidosSolicitados;
      }
      return this.pedidosSolicitados.filter(pedido => {
        return (
          pedido.idPedido
            .toString()
            .toLowerCase()
            .indexOf(this.terminoBuscar.toLowerCase()) !== -1
        );
      });
    } else {
      return null;
    }
  }
}
