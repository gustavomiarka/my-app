export class experiencia{
    id?: number;
    nombreEmpresa : String;
    fechaIni: String;
    fechaFin: String;
    descripcion: String;
    titulo: String;

    constructor(nombreEmpresa : String, fechaIni : String, fechaFin : String, descripcion : String, titulo : String) {
        this.nombreEmpresa = nombreEmpresa;
        this.fechaIni = fechaIni;  
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.titulo = titulo;   
    }
}