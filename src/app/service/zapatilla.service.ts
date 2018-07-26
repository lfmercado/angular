import { Injectable} from '@angular/core';
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
    this.zapatillas = [
        new Zapatilla('Start', 'Reebook', 'Negras', 120000, false),
        new Zapatilla('Milleniun', 'Adidas', 'Rojas', 90000, true),
        new Zapatilla('Start', 'Reebook', 'Negras', 120000, false),
        new Zapatilla('Milleniun', 'Adidas', 'Rojas', 120000, true),
        new Zapatilla('Start', 'Totto', 'Negras', 120000, true),
        new Zapatilla('Milleniun', 'Nike', 'Rojas', 90000, true),
        new Zapatilla('Start', 'Reebook', 'Negras', 90000, true ),
        new Zapatilla('Milleniun', 'Adidas', 'Rojas', 120000, false)
    ];
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}