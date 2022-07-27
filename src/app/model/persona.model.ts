export class persona {
    id? : number;
    nombre : String;
    apellido : String;
    dni : String;
    email : String;
    domicilio : String;
    telefono : String;
    sobre_mi : String;
    fecha_nac : String;
    url_foto : String;

    constructor(nombre: String, apellido: String, dni: String, email: String, domicilio: String, telefono: String, sobre_mi: String, fecha_nac: String, url_foto: String){
        this.nombre = nombre;
        this.apellido =apellido;
        this.dni = dni;
        this.email = email;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.sobre_mi = sobre_mi;
        this.fecha_nac = fecha_nac;
        this.url_foto = url_foto;
    }
}