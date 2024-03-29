import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesSoft } from '../model/habilidadesSoft.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesSoftService {

  url = ' https://backend-porfolio-g.herokuapp.com/soft';
  constructor(private http: HttpClient) { }

  public getHabilidadesSoft(): Observable<habilidadesSoft[]>{
    return this.http.get<habilidadesSoft[]>(this.url + '/ver/');
  }

  public saveHabilidadesSoft(habilidadesSoft:habilidadesSoft): Observable<any>{
    return this.http.post<any>(this.url + '/new', habilidadesSoft);
  }

  public deleteHabilidadesSoft(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

  public detailHabilidadesSoft(id:number): Observable<any>{
    return this.http.get<any>(this.url + `/detail/${id}`);
  }

  public updateHabilidadesSoft(id:number, habilidadesSoft:habilidadesSoft): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, habilidadesSoft);
  }
}
