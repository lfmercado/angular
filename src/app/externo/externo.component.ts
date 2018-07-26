import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public noValid:boolean;

  constructor(private _peticionesServices:PeticionesServices) { }

  ngOnInit() {
    this.userId =1;
    this.noValid= false;
  }

  cargarUsuario(){
    console.log(this.userId);
    if(this.userId != ''){
      this.noValid = false;
    this._peticionesServices.getUser(this.userId).subscribe(
      resultado =>{
        this.user = resultado.data;
        console.log(resultado);
      }, 
      error => {
        console.log(<any>error);
      }
      
    );
    }else {
    this.noValid = true;
    }
}
 

}
