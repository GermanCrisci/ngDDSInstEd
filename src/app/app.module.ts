import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursosMaterialComponent } from './components/cursos-material/cursos-material.component';
import { CursosMaterialesComponent } from './components/cursos-materiales/cursos-materiales.component';
import { MaterialAgregarComponent } from './components/material-agregar/material-agregar.component';
import { MaterialEditarComponent } from './components/material-editar/material-editar.component';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';
import { AlumnoDetallerComponent } from './components/alumno-detaller/alumno-detaller.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoAddComponent } from './components/alumno-add/alumno-add.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoMaterialesComponent } from './components/curso-materiales/curso-materiales.component';
import { CursoMaterialAddComponent } from './components/curso-material-add/curso-material-add.component';
import { CursoMaterialDetailsComponent } from './components/curso-material-details/curso-material-details.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    PostListComponent,
    PostDetailsComponent,
    CursosListaComponent,
    CursosMaterialComponent,
    CursosMaterialesComponent,
    MaterialAgregarComponent,
    MaterialEditarComponent,
    AlumnoListaComponent,
    AlumnoDetallerComponent,
    AlumnoListComponent,
    AlumnoAddComponent,
    AlumnoDetailsComponent,
    CursoListComponent,
    CursoMaterialesComponent,
    CursoMaterialAddComponent,
    CursoMaterialDetailsComponent,
    CursoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
