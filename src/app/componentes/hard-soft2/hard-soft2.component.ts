import { Component, OnInit } from '@angular/core';
import { habilidadesSoft } from 'src/app/model/habilidadesSoft.model';
import { HabilidadesSoftService } from 'src/app/servicios/habilidades-soft.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hard-soft2',
  templateUrl: './hard-soft2.component.html',
  styleUrls: ['./hard-soft2.component.css']
})
export class HardSoft2Component implements OnInit {

  soft: habilidadesSoft[]=[];

  constructor(private habilidadesSoftService:HabilidadesSoftService ,private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSoft();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSoft(): void {
    this.habilidadesSoftService.getHabilidadesSoft().subscribe(data => {
      this.soft = data;
    })
  }

  deleteSoft(id?:number ): void {
    this.habilidadesSoftService.deleteHabilidadesSoft(id).subscribe(data => {
      this.cargarSoft();
    })
  }
}
