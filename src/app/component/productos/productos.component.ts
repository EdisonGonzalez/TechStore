import { ModeloSolicitud } from "./../../interface/modelo-solicitud";
import { ModeloPedido } from "../../interface/modelo-pedido";
import { CITIES } from "./../../const/CITIES";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { COLORS } from "./../../const/COLORS";
import { SharingDataService } from "./../../service/sharing-data.service";
import { Component, OnInit } from "@angular/core";
import { ModeloProductos } from "src/app/interface/modelo-productos";
import { Router } from "@angular/router";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"]
})
export class ProductosComponent implements OnInit {
  productssel: ModeloProductos[];
  colores: String[] = COLORS;
  ciudades: String[] = CITIES;
  form: FormGroup;
  theFile: any = null;
  MAX_SIZE: number = 1024 * 1024;
  files: File = null;
  valueCantColor: any = [];
  tamaLista: number;
  contadorComprar: number = 0;
  pedidoNew: ModeloPedido;
  prodPedidos: ModeloPedido[] = [];
  prodSolicitados: ModeloSolicitud[];
  solicitud: ModeloSolicitud;

  constructor(
    private dataService: SharingDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.currentDataProdsSel.subscribe(productosClicks => {
      this.productssel = productosClicks;
      this.tamaLista = productosClicks.length;
    });
    this.crearFormulario();
    this.dataService.changecurrentPageSel(2);
  }

  crearFormulario() {
    this.form = this.formBuilder.group({
      inputnombre: ["", [Validators.required]],
      inputfecha: ["", [Validators.required]],
      inputdireccion: ["", [Validators.required]],
      inputciudad: ["LETICIA", [Validators.required]],
      inputfile: ["", [Validators.required]]
    });
  }

  onSubmit() {
    alert("Pedido agregado");
    this.obtener_localstorage("pedidos");
    this.grabar_localstorage();
    this.router.navigateByUrl("pedidos");
  }

  obtener_localstorage(item: string) {
    if (JSON.parse(localStorage.getItem(item)) == null) {
      this.prodSolicitados = [];
    } else {
      this.prodSolicitados = JSON.parse(localStorage.getItem(item));
    }
  }

  grabar_localstorage() {
    this.solicitud = {
      idPedido: new Date().valueOf(),
      nombre: this.form.get("inputnombre").value,
      fechaDeNacimiento: this.form.get("inputfecha").value,
      direccionDeEnvio: this.form.get("inputdireccion").value,
      ciudad: this.form.get("inputciudad").value,
      pedidos: this.prodPedidos
    };
    this.prodSolicitados.push(this.solicitud);
    localStorage.setItem("pedidos", JSON.stringify(this.prodSolicitados));
  }

  onSubmitPeque(event: any, producto: ModeloProductos) {
    this.valueCantColor.push([
      event.currentTarget[0].value,
      event.currentTarget[1].value
    ]);
    event.currentTarget[2].disabled = "true";
    this.contadorComprar += 1;
    this.pedidoNew = {
      producto: {
        descripcion: producto.descripcion,
        cantidadDisponible: producto.cantidadDisponible,
        imagen: producto.imagen,
        miniatura: producto.miniatura,
        idProducto: producto.idProducto,
        categoria: producto.categoria,
        precio: producto.precio
      },
      cantidad: event.currentTarget[0].value,
      color: event.currentTarget[1].value
    };
    this.prodPedidos.push(this.pedidoNew);
  }

  onFileChange(event: any) {
    this.theFile = <File>event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size < this.MAX_SIZE) {
      } else {
        this.files = <File>null;
        this.form.controls["inputfile"].setValue("");
        alert("El archivo pesa mas de 1MB");
      }
    }
  }
}
