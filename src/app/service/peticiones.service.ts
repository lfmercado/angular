import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesServices{

    public url: String;
    constructor(public _http: HttpClient){
        
        this.url ="https://reqres.in/";
    }

    getUser(userId):Observable<any>{
        return this._http.get(this.url + 'api/users/' + userId);
    }
}