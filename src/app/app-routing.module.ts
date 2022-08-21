import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';



const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path: '', redirectTo: 'portfolio', pathMatch:'full'},
  {path: 'nuevaExp', component: NewExperienciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
