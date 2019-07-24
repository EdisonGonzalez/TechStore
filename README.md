# TechStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.


## Problema planteado

Utilizando sus conocimientos de Angular 6 o superior, desarrolle una pequeña aplicación que presente un catálogo de productos, el cual se obtiene de una API, y brinde la opción de radicar un pedido de un producto a través de un formulario, y persista los datos del pedido localmente, de modo que se puedan consultar los pedidos generados y filtrarlos por ID.

## Requerimientos

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
