export class habilidadesSoft{
    id?: number;
    habilidadSoft : String;
    porcentaje: number;

    constructor(habilidadSoft: string, porcentaje: number) {
        this.habilidadSoft =habilidadSoft;
        this.porcentaje = porcentaje;
    }
}