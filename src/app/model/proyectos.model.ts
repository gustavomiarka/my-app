export class proyectos {
    id?: number;
    titulo : string;
    fechaIni: string;
    fechaFin: string;
    descripcion: string;
    link: string;

    constructor(titulo : string, fechaIni : string, fechaFin : string, descripcion : string, link : string) {
        this.titulo = titulo;
        this.fechaIni = fechaIni;  
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.link = link;   
    }
}