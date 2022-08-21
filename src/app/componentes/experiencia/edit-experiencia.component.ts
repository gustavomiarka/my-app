import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expe: ExperienciaLab= null;

  constructor( private experienciaService: ExperienciaService , private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detailExperiencia(id).subscribe(data =>{
      this.expe = data;
    },err =>{
      alert('Error al editar ');
      this.router.navigate(['']);
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.updateExperiencia(id, this.expe).subscribe(data => {
      this.router.navigate(['']);
    },err =>{
      alert("Error al editar");
    });
  }

}
