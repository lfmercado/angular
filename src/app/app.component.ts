import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = 'Master En Angular';
  public descripcion: string = "";
  public titulo2: string;
  public title:string="";
  public config ;

 constructor(){
   this.title = Configuracion.titulo;
   this.descripcion = Configuracion.descripcion; 
   this.config = Configuracion;
 }
 
  public cambiarTituloConf(value){
    console.log(value);
   this.title = value;
  }
 
}
