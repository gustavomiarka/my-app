import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-imag',
  templateUrl: './imag.component.html',
  styleUrls: ['./imag.component.css']
})
export class ImagComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "", "")
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      
      this.persona=data;
    });
  }

}
