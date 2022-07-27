export class proyectos {
    id?: number;
    titulo : String;
    fechaIni: String;
    fechaFin: String;
    descripcion: String;
    link: String;

    constructor(titulo : String, fechaIni : String, fechaFin : String, descripcion : String, link : String) {
        this.titulo = titulo;
        this.fechaIni = fechaIni;  
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.link = link;   
    }
}