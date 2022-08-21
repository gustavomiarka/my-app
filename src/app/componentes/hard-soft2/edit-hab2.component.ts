import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidadesSoft } from 'src/app/model/habilidadesSoft.model';
import { HabilidadesSoftService } from 'src/app/servicios/habilidades-soft.service';

@Component({
  selector: 'app-edit-hab2',
  templateUrl: './edit-hab2.component.html',
  styleUrls: ['./edit-hab2.component.css']
})
export class EditHab2Component implements OnInit {
  
  soft: habilidadesSoft= null;

  constructor(private habilidadesSoftService:HabilidadesSoftService , private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idSoft = this.activatedRoute.snapshot.params['id'];
    this.habilidadesSoftService.detailHabilidadesSoft(idSoft).subscribe(data =>{
      this.soft = data;
    },err =>{
      alert('Error al editar ');
      this.router.navigate(['']);
    });
  }

  onUpdateSoft(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesSoftService.updateHabilidadesSoft(id, this.soft).subscribe(data => {
      this.router.navigate(['']);
    },err =>{
      alert("Error al editar");
    });
  }

}
