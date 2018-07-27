# AprendiendoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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





Se crea un componente junto con su vista, ese componente 

 ng g conmponent "NOMBRE DE COMPONENTE"
  por medio del comando anterior podemos crear un nuevo componente el cual ya tendria toda una estructura
  base y vendria añadido al app.module

  Evento keyUp
   por medio de este evento podemos capturar la ultima tecla pulsada por el usuario, puede llegar a ser de mucha utilidad para 
   capturar la tecla ENTER para poder ejecutar los metodos sin necesidad de dar click en el boton

 Evento blur
   Por medio de este evento se puede saber cuando se ha salido del texField 
 ngClass
   nos permite asiganarle a un atributo una clase cuando se cumpla una condicion
 
 router.navigate(['/zapatillas'])
 por medio de esta directiva se puede redireccionar a una url especifica ya sea por medio de un evento o una condicion


 Las PIPES son un tipo de filtros que se le pueden aplicar a fechas, strings para poder setearlos de una manera comoda o neceseria
 se pueden descargar algunas librerias de angular 2 que vienen con muchos pipes de fechas como los que se encontrarian en angular/moment

 Instalar MongoBD ---> Crear una carpeta en disco local C->data->db
 Instalar  https://robomongo.org/
 