import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  edu : educacion = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detailEducacion(id).subscribe(data =>{
      this.edu = data;
    },err =>{
      alert('Error al editar ');
      this.router.navigate(['']);
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.updateEducacion(id, this.edu).subscribe(data => {
      this.router.navigate(['']);
    },err =>{
      alert("Error al editar");
    });
  }

}
