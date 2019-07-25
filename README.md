# TechStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Acerca de esta Prueba de Concepto

### Problema planteado

Utilizando sus conocimientos de Angular 6 o superior, desarrolle una pequeña aplicación que presente un catálogo de productos, el cual se obtiene de una API, y brinde la opción de radicar un pedido de un producto a través de un formulario, y persista los datos del pedido localmente, de modo que se puedan consultar los pedidos generados y filtrarlos por ID.

### Requerimientos

1. Ruta de la API (sólo tiene 5 productos, IDs del 1 al 5): 
https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos
2. En el catálogo se deben mostrar las miniaturas y al hacer clic, debe mostrar la imagen grande
3. Debe permitir solicitar los productos que tienen cantidad disponible
4. El formulario del pedido debe solicitar:
* Nombre
* Fecha de nacimiento
* Dirección de envío
* Lista desplegable con la ciudad (los valores pueden estar “quemados”)
* Solicitar la carga de un archivo que correspondería a la copia de la cédula (sólo exigir que sea PDF y pese menos de 1MB)
5. Los pedidos se deben almacenar localmente en el navegador
6. Se debe generar un ID numérico por cada pedido generado
7. No es necesario descontar el inventario
8. La opción de visualización de los pedidos radicados debe hacerse mediante una tabla y permitir filtrar los pedidos por ID
9. Se deben incluir los popups con mensajes de éxito y error que considere pertinentes
10. Se debe hacer un buen manejo del “maquetado” utilizando CSS3 o SASS
11. La aplicación debe tener “responsive design”
12. Se debe entregar el repositorio de Github con el código del proyecto demostrando todas las buenas prácticas, y un buen README.md con la descripción del proyecto

### Como ejecutar este proyecto

1. Requerimiento, debe de tener instalado Node.JS, Angular 7 y Angular CLI.
2. Clonar el proyecto.
3. Dentro de la carpeta del proyecto clonada, ejecutar npm install.
4. Usar ng serve --open.

### Capturas de pantalla
1. 
![alt text](https://raw.githubusercontent.com//EdisonGonzalez/TechStore/tree/develop/src/assets/CapturasPantallaDocumentar/VistaCatalogo.png)

2. 
![alt text](https://raw.githubusercontent.com//EdisonGonzalez/TechStore/tree/develop/src/assets/CapturasPantallaDocumentar/VistaProductos.png)

3. 
![alt text](https://raw.githubusercontent.com//EdisonGonzalez/TechStore/tree/develop/src/assets/CapturasPantallaDocumentar/VistaPedidos.png)

4. 
![alt text](https://raw.githubusercontent.com//EdisonGonzalez/TechStore/tree/develop/src/assets/CapturasPantallaDocumentar/ClickSobreUnaImagenCard.png)

5. 
![alt text](https://raw.githubusercontent.com//EdisonGonzalez/TechStore/tree/develop/src/assets/CapturasPantallaDocumentar/FuncionalidadSearchCatalogoYPedidos.png)

## Informacion Adicional - Angular CLI para este proyecto
ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 7.0.7
Node: 10.13.0
OS: darwin x64
Angular: 7.0.4
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.10.7
@angular-devkit/build-angular     0.10.7
@angular-devkit/build-optimizer   0.10.7
@angular-devkit/build-webpack     0.10.7
@angular-devkit/core              7.0.7
@angular-devkit/schematics        7.0.7
@angular/cli                      7.0.7
@ngtools/webpack                  7.0.7
@schematics/angular               7.0.7
@schematics/update                0.10.7
rxjs                              6.3.3
typescript                        3.1.6
webpack                           4.19.1

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
