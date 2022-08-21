export class experiencia_lab{
    id?: number;
    nombreEmpresa : string;
    fechaIni: string;
    fechaFin: string;
    descripcion: string;
    titulo: string;

    constructor(nombreEmpresa : string, fechaIni : string, fechaFin : string, descripcion : string, titulo : string) {
        this.nombreEmpresa = nombreEmpresa;
        this.fechaIni = fechaIni;  
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.titulo = titulo;   
    }
}