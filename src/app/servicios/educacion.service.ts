import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = ' https://backend-porfolio-g.herokuapp.com/educacion';
  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<educacion[]>{
    return this.http.get<educacion[]>(this.url + '/ver/');
  }

  public saveEducacion(educacion:educacion): Observable<any>{
    return this.http.post<any>(this.url + '/new', educacion);
  }

  public deleteEducacion(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

  public detailEducacion(id:number): Observable<any>{
    return this.http.get<any>(this.url + `/detail/${id}`);
  }

  public updateEducacion(id:number, educacion:educacion): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, educacion);
  }
}
