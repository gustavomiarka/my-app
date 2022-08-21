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

  public saveProyectos(proyectos:proyectos): Observable<any>{
    return this.http.post<any>(this.url + '/new', proyectos);
  }

  public deleteProyectos(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

  public detailProyectos(id:number): Observable<any>{
    return this.http.get<any>(this.url + `/detail/${id}`);
  }

  public updateProyectos(id:number, proyectos:proyectos): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, proyectos);
  }
}
