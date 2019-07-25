import { ModeloSolicitud } from './../../interface/modelo-solicitud';
import { ModeloPedido } from '../../interface/modelo-pedido';
import { CITIES } from './../../const/CITIES';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COLORS } from './../../const/COLORS';
import { SharingDataService } from './../../service/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { ModeloProductos } from 'src/app/interface/modelo-productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {//AfterViewInit { //OnInit {

  productssel: ModeloProductos[]; //Valor que obtenemos del servicio compartido entre componentes
  colores: String[] = COLORS;
  ciudades: String[] = CITIES;
  form: FormGroup;
  theFile: any = null;
  MAX_SIZE: number = 1024*1024;
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
    private router: Router) {}

  ngOnInit() {
    //Obteniendo la lista de productos a solicitar o pedir
    this.dataService.currentDataProdsSel.subscribe(
      productosClicks => {
        this.productssel = productosClicks; //Obteniendo el valor del servicio
        this.tamaLista = productosClicks.length; //El length de la lista
      }
    )
    this.crearFormulario();
    console.log("Se esperan " + this.tamaLista + " comprar y se han dado click en: " + this.contadorComprar);

    this.dataService.changecurrentPageSel(2); //2 - Pagina de Productos
  }

  crearFormulario(){
    this.form = this.formBuilder.group(
      {
        inputnombre: ['', [Validators.required]],
        inputfecha: ['', [Validators.required]],
        inputdireccion: ['', [Validators.required]],
        inputciudad: ['LETICIA', [Validators.required]],
        inputfile: ['', [Validators.required]]
      }
    )
  }

  onSubmit(){
    alert("Se envio");
    this.obtener_localstorage("pedidos");
    this.grabar_localstorage();
    this.router.navigateByUrl('pedidos');
  }

  obtener_localstorage(item: string){
    if(JSON.parse(localStorage.getItem(item)) == null){
      console.log("Locale Storage vacio");
      this.prodSolicitados = [];
    } else {
      this.prodSolicitados = JSON.parse(localStorage.getItem(item));
      console.log("Locale Storage NO ESTA Vacio");
    }
    console.log("Obtenido del locale Storage: ", this.prodSolicitados);
  }

  grabar_localstorage(){
    this.solicitud = {
      //Del pedido
      idPedido: new Date().valueOf(),
      nombre: this.form.get('inputnombre').value,
      fechaDeNacimiento: this.form.get('inputfecha').value,
      direccionDeEnvio: this.form.get('inputdireccion').value,
      ciudad: this.form.get('inputciudad').value,
      //Arreglo de los productos del pedido
      pedidos: this.prodPedidos
    }
    this.prodSolicitados.push(this.solicitud);
    console.log("Como se guardo en el locale Storage: ", this.prodSolicitados);
    localStorage.setItem("pedidos", JSON.stringify(this.prodSolicitados));
  }

  onSubmitPeque(event:any, producto: ModeloProductos){
    alert("Enviado");
    console.log("Los valores ingresados son cantidad: ", event.currentTarget[0].value);
    console.log("Los valores ingresados son color: ", event.currentTarget[1].value);
    this.valueCantColor.push([event.currentTarget[0].value, event.currentTarget[1].value]);
    event.currentTarget[2].disabled = "true";
    console.log("Arreglo total: ", this.valueCantColor);
    console.log("Producto seleccionado: ", producto);
    this.contadorComprar += 1;
    console.log("Se esperan " + this.tamaLista + " comprar y se han dado click en: " + this.contadorComprar);
    //debugger;
    this.pedidoNew = {
      //Del producto
      'producto': {
        'descripcion': producto.descripcion,
        'cantidadDisponible': producto.cantidadDisponible,
        'imagen': producto.imagen,
        'miniatura': producto.miniatura,
        'idProducto': producto.idProducto,
        'categoria': producto.categoria,
        'precio': producto.precio,
      },
      //Agregados
      'cantidad': event.currentTarget[0].value,
      'color': event.currentTarget[1].value
    };
    this.prodPedidos.push(this.pedidoNew);
  }

  onFileChange(event:any) {
    console.log("Dentro de onFileChange");
    this.theFile = <File>event.target.files[0];
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set theFile property
        console.log("Menor de 1MB");
        alert('Pesa menos de 1MB')
      }
      else {
        // Display error message
        console.log("Mayor de 1MB");
        //debugger;
        this.files = <File>null;
        this.form.controls['inputfile'].setValue("");
        alert('El archivo pesa mas de 1MB');
        //this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
      }
    }
  }
}
