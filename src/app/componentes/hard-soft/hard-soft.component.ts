import { Component, OnInit } from '@angular/core';
import { habilidadesHard } from 'src/app/model/habilidadesHard.model';
import { habilidadesSoft } from 'src/app/model/habilidadesSoft.model';
import { HabilidadesHardService } from 'src/app/servicios/habilidades-hard.service';
import { HabilidadesSoftService } from 'src/app/servicios/habilidades-soft.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
export class HardSoftComponent implements OnInit {
 
  hard: habilidadesHard[]=[];
  
  


  constructor(private habilidadesHardService:HabilidadesHardService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarHard();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarHard(): void {
    this.habilidadesHardService.getHabilidadesHard().subscribe(data =>{
      this.hard = data;
    });
  }

  

  deleteHard(id?:number ): void {
    this.habilidadesHardService.deleteHabilidadesHard(id).subscribe(data => {
      this.cargarHard();
    })
  }

}
