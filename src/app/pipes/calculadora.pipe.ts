//importamos los componentes de las pipes
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'

})

export class CalculadoraPipe implements PipeTransform {

    // Primer parametro Dato  | Calculadora: OtroDato

    transform(value: any, valueTwo:any){
        let operaciones = `
            Suma: ${value+valueTwo} </br>
            Resta:${value-valueTwo} </br>
            Multiplicacion:${value*valueTwo} </br>
            Division:${value/valueTwo}
        `;
        return operaciones;
    }

}