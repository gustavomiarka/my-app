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
    NewExperienciaComponent
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
