export class persona {
    id? : number;
    nombre : string;
    apellido : string;
    
    email : string;
    
    sobre_mi : string;
    titulo : string;
    url_foto : string;

    constructor(nombre: string, apellido: string,  email: string, sobre_mi: string, titulo: string, url_foto: string){
        this.nombre = nombre;
        this.apellido =apellido;
        
        this.email = email;
        
        this.sobre_mi = sobre_mi;
        this.titulo = titulo;
        this.url_foto = url_foto;
    }
}