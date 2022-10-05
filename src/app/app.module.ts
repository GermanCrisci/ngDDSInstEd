import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoMaterialesComponent } from './components/curso-materiales/curso-materiales.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosCrearComponent } from './components/alumnos-crear/alumnos-crear.component';
import { AlumnosEditarComponent } from './components/alumnos-editar/alumnos-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoMaterialesComponent,
    AlumnosListaComponent,
    AlumnosCrearComponent,
    AlumnosEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
