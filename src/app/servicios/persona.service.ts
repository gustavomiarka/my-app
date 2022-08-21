import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/persona';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.url + '/ver/perfil');
  }

  public savePersona(persona:persona): Observable<any>{
    return this.http.post<any>(this.url + '/new', persona);
  }

  public deletePersona(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }

  public detailPersona(id:number): Observable<any>{
    return this.http.get<any>(this.url + `/detail/${id}`);
  }

  public updatePersona(id:number, persona:persona): Observable<any>{
    return this.http.put<any>(this.url + `/update/${id}`, persona);
  }
}
