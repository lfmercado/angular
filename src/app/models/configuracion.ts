export var Configuracion = {
    color: "red",
    fondo: "#eee",
    titulo: "Aplicacion Con Angular",
    descripcion: "Aprendiendo Angular En Udemy",
    cambiarTitulo: function (value:string):string {
        return Configuracion.titulo = value;
    }
};
