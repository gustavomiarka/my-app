export class educacion{
    id?: number;
    instituto : String;
    fechaIni: String;
    fechaFin: String;
    carrera : String;

    constructor(instituto : String, fechaIni : String, fechaFin : String, carrera : String) {
        this.instituto = instituto;
        this.fechaIni = fechaIni;  
        this.fechaFin = fechaFin;
        this.carrera = carrera;
    }
}