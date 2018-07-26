import {Component, OnInit, DoCheck,OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;
    public mostrar_videojuegos: boolean = true;
    constructor(){
        this.titulo = "Componente de Videojuego";
        this.listado = "Listado De Los Juegos Más Populares :"
        console.log("se ha cargo el componente videojuego.componente.ts!");
    }
    //Metodo que se ejecuta cada vez que se carga el componente
    ngOnInit(){

    }
    //Metodo que se ejecuta cada vez que se realiza un cambio en los componentes de la aplicacion
    ngDoCheck(){
        console.log("DoCheck Ejecutado");
    }
    public cambiarTitulo(){
        this.titulo = "Nuevo Titulo De Componente";
    }
    ngOnDestroy(){
        console.log("OnDestroy Ejecutado");
    }

    ocultarVideoJuegos(value){
        this.mostrar_videojuegos = value;
      }
}
