import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLab } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  urlExp = 'http://localhost:8080/experiencia';
  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<ExperienciaLab[]>{
    return this.http.get<ExperienciaLab[]>(this.urlExp + '/ver');
  }

  public saveExperiencia(experiencia:ExperienciaLab): Observable<any>{
    return this.http.post<any>(this.urlExp + '/new', experiencia);
  }

  public deleteExperiencia(id:number): Observable<any>{
    return this.http.delete<any>(this.urlExp + `/delete/${id}`);
  }

  public detailExperiencia(id:number): Observable<any>{
    return this.http.get<any>(this.urlExp + `/detail/${id}`);
  }

  public updateExperiencia(id:number, experiencia:ExperienciaLab): Observable<any>{
    return this.http.put<any>(this.urlExp + `/update/${id}`, experiencia);
  }

}
