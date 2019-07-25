import { CITIES } from './../../const/CITIES';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COLORS } from './../../const/COLORS';
import { SharingDataService } from './../../service/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { ModeloProductos } from 'src/app/interface/modelo-productos';

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

  constructor(
    private dataService: SharingDataService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dataService.currentDataProdsSel.subscribe(
      productosClicks => {
        this.productssel = productosClicks; //Obteniendo el valor del servicio
        this.tamaLista = productosClicks.length; //El length de la lista
      }
    )
    this.crearFormulario();
    console.log("Se esperan " + this.tamaLista + " comprar y se han dado click en: " + this.contadorComprar);

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
