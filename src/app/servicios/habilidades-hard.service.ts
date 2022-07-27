import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesHard } from '../model/habilidadesHard.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesHardService {

  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public getHabilidadesHard(): Observable<habilidadesHard>{
    return this.http.get<habilidadesHard>(this.url + 'ver/hard');
  }
}
