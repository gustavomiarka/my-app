import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHabComponent } from './componentes/hard-soft/edit-hab.component';
import { NewHabComponent } from './componentes/hard-soft/new-hab.component';
import { EditHab2Component } from './componentes/hard-soft2/edit-hab2.component';
import { NewHab2Component } from './componentes/hard-soft2/new-hab2.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';



const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path: '', redirectTo: 'portfolio', pathMatch:'full'},
  {path: 'nuevaExp', component: NewExperienciaComponent},
  {path: 'nuevaEdu', component: NewEducacionComponent},
  {path: 'nuevaHab', component: NewHabComponent},
  {path: 'nuevaHab2', component: NewHab2Component},
  {path: 'nuevoProyecto', component: NewProyectosComponent},
  {path: 'editEdu/:id', component: EditEducacionComponent},
  {path: 'editProyec/:id', component: EditProyectosComponent},
  {path: 'editExp/:id', component: EditExperienciaComponent},
  {path: 'editHab/:id', component: EditHabComponent},
  {path: 'editHab2/:id', component: EditHab2Component},
  {path: 'editPersona/:id', component: EditAcercaDeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
