import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ValueTransformer } from "@angular/compiler/src/util";
import {  ZapatillaService } from '../service/zapatilla.service';
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]


})
export class ZapatillasComponent implements OnInit {
    public titulo: String;
    public zapatillas: Array<Zapatilla>;
    public marcas : String[];
    public indice:  String[];
    public color: String;
    public miMarca: String;
    public nuevoColor: String;

    constructor(private _zapatillaService: ZapatillaService) {
        this.marcas = new Array();
        this.color = "blue";
        this.titulo = "Nuevo Componente Zapatillas";
        this.miMarca ="Nueva Marca";
        this.indice = new Array();
  

        console.log(this.zapatillas);
    }
    ngOnInit(){
        console.log("Se ha iniciado el OnInit");
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    }
    getMarcas(){
        this.zapatillas.forEach((value, index) => {
            if(this.marcas.indexOf(value.marca) < 0){
            this.marcas.push(value.marca);
            this.indice.push(index.toString());
            console.log(this.indice);
            }
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.miMarca);
    }
    addMarca(){
        this.marcas.push(this.miMarca);
    }
    cambiarColor(){
        this.color = this.nuevoColor;
    }
    borrarMarca(indice){   //con el "indice" le decimos a partir de que indice empiece a borrar, con el otro parametro le decimos cuantos se desea borrar!
        this.marcas.splice(indice, 1);
    }
}