import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidadesHard } from 'src/app/model/habilidadesHard.model';
import { HabilidadesHardService } from 'src/app/servicios/habilidades-hard.service';


@Component({
  selector: 'app-edit-hab',
  templateUrl: './edit-hab.component.html',
  styleUrls: ['./edit-hab.component.css']
})
export class EditHabComponent implements OnInit {

  hard: habilidadesHard= null;
 

  constructor(private habilidadesHardService:HabilidadesHardService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const idHard = this.activatedRoute.snapshot.params['id'];
    this.habilidadesHardService.detailHabilidadesHard(idHard).subscribe(data =>{
      this.hard = data;
    },err =>{
      alert('Error al editar ');
      this.router.navigate(['']);
    });

    

  }

  onUpdateHard(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesHardService.updateHabilidadesHard(id, this.hard).subscribe(data => {
      this.router.navigate(['']);
    },err =>{
      alert("Error al editar");
    });
  }

  

}
