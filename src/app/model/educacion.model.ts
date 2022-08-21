export class educacion{
    id?: number;
    instituto : string;
    fechaIni: string;
    fechaFin: string;
    carrera : string;

    constructor(instituto : string, fechaIni : string, fechaFin : string, carrera : string) {
        this.instituto = instituto;
        this.fechaIni = fechaIni;  
        this.fechaFin = fechaFin;
        this.carrera = carrera;
    }
}