export class Zapatilla {
    /*
        public nombre:string ="";
        public precio:number ;
        public marca:string = "";
        public color:string ="";
        public stock:boolean;
    En angular se puede ahorrar el tener que declarar las variables antes del constructor y se pueden crear dentro del contructor
        constructor(nombre:string, marca:string,color:string,precio:number,stock:boolean){
            this.nombre = nombre;
            this.color = color;
            this.precio = precio;
            this.marca = marca;
            this.stock = stock;
    
        }*/

    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean) { }
}