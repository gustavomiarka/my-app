import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesHard } from '../model/habilidadesHard.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesHardService {

  url = ' https://backend-porfolio-g.herokuapp.com/hard';
  constructor(private http: HttpClient) { }

  public getHabilidadesHard(): Observable<habilidadesHard[]>{
    return this.http.get<habilidadesHard[]>(this.url + '/ver/');
  }

  public saveHabilidadesHard(habilidadesHard:habilidadesHard): Observable<any>{
    return this.http.post<any>(this.url + '/new', habilidadesHard);
  }

  public deleteHabilidadesHard(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

  public detailHabilidadesHard(id:number): Observable<any>{
    return this.http.get<any>(this.url + `/detail/${id}`);
  }

  public updateHabilidadesHard(id:number, habilidadesHard:habilidadesHard): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, habilidadesHard);
  }
}
