export class habilidadesSoft{
    id?: number;
    habilidadSoft : string;
    porcentaje: number;

    constructor(habilidadSoft: string, porcentaje: number) {
        this.habilidadSoft =habilidadSoft;
        this.porcentaje = porcentaje;
    }
}