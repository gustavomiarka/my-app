import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidadesSoft } from 'src/app/model/habilidadesSoft.model';
import { HabilidadesSoftService } from 'src/app/servicios/habilidades-soft.service';

@Component({
  selector: 'app-new-hab',
  templateUrl: './new-hab2.component.html',
  styleUrls: ['./new-hab2.component.css']
})
export class NewHab2Component implements OnInit {

  habilidadesSoft : string = '';
  porcentaje : number = null;

  constructor(private habilidadesSoftService:HabilidadesSoftService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const soft = new habilidadesSoft(this.habilidadesSoft, this.porcentaje);
    this.habilidadesSoftService.saveHabilidadesSoft(soft).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    },err => {
      alert("Fallo la carga");
      this.router.navigate([''])
    })
  }

}
