import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoAddComponent } from './components/alumno-add/alumno-add.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoMaterialAddComponent } from './components/curso-material-add/curso-material-add.component';
import { CursoMaterialDetailsComponent } from './components/curso-material-details/curso-material-details.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    PostListComponent,
    PostDetailsComponent,
    AlumnoListComponent,
    AlumnoDetailsComponent,
    AlumnoAddComponent,
    CursoListComponent,
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
