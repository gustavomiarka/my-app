import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = 'http://localhost:8080/proyecto';
  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<proyectos[]>{
    return this.http.get<proyectos[]>(this.url + '/ver/');
  }
}
