import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia_lab } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  urlExp = 'http://localhost:8080/experiencia';
  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<experiencia_lab[]>{
    return this.http.get<experiencia_lab[]>(this.urlExp + '/ver');
  }

  public saveExperiencia(experiencia:experiencia_lab): Observable<any>{
    return this.http.post<any>(this.urlExp + '/new', experiencia);
  }

  public deleteExperiencia(id:number): Observable<any>{
    return this.http.delete<any>(this.urlExp + `/delete/${id}`);
  }

  public updateExperiencia(id:number): Observable<any>{
    return this.http.put<any>(this.urlExp + `/update/${id}`, experiencia_lab);
  }

}
