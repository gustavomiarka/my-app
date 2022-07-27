import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesSoft } from '../model/habilidadesSoft.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesSoftService {

  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public getHabilidadesSoft(): Observable<habilidadesSoft>{
    return this.http.get<habilidadesSoft>(this.url + 'ver/soft');
  }
}
