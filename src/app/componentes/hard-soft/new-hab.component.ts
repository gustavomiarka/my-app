import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidadesHard } from 'src/app/model/habilidadesHard.model';
import { HabilidadesHardService } from 'src/app/servicios/habilidades-hard.service';

@Component({
  selector: 'app-new-hab',
  templateUrl: './new-hab.component.html',
  styleUrls: ['./new-hab.component.css']
})
export class NewHabComponent implements OnInit {

  habilidadesHard : string = '';
  porcentaje : number = null;

  constructor(private habilidadesHardService : HabilidadesHardService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hard = new habilidadesHard(this.habilidadesHard, this.porcentaje);
    this.habilidadesHardService.saveHabilidadesHard(hard).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    },err => {
      alert("Fallo la carga");
      this.router.navigate([''])
    })
  }


}
