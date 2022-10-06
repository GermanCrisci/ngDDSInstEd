import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoAddComponent } from './components/alumno-add/alumno-add.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';
import { CursoMaterialDetailsComponent } from './components/curso-material-details/curso-material-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoListComponent,
    AlumnoDetailsComponent,
    AlumnoAddComponent,
    CursoListComponent,
    CursoDetailsComponent,
    CursoMaterialDetailsComponent,
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
