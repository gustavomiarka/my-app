import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  persona: persona= null;

  constructor(private personaService: PersonaService ,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detailPersona(id).subscribe(data =>{
      this.persona = data;
    },err =>{
      alert('Error al editar ');
      this.router.navigate(['']);
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.updatePersona(id, this.persona).subscribe(data => {
      this.router.navigate(['']);
    },err =>{
      alert("Error al editar");
    });
  }

}
