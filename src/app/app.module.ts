import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ImagComponent } from './componentes/imag/imag.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSoftComponent } from './componentes/hard-soft/hard-soft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import {FormsModule} from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor.service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditHabComponent } from './componentes/hard-soft/edit-hab.component';
import { EditHab2Component } from './componentes/hard-soft2/edit-hab2.component';
import { NewHabComponent } from './componentes/hard-soft/new-hab.component';
import { HardSoft2Component } from './componentes/hard-soft2/hard-soft2.component';
import { NewHab2Component } from './componentes/hard-soft2/new-hab2.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ImagComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditProyectosComponent,
    NewProyectosComponent,
    EditExperienciaComponent,
    EditHabComponent,
    EditHab2Component,
    NewHabComponent,
    NewHab2Component,
    HardSoft2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
