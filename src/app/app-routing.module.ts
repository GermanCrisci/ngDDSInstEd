import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { AlumnoAddComponent } from './components/alumno-add/alumno-add.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoDetailsComponent } from './components/curso-details/curso-details.component';
import { CursoMaterialDetailsComponent } from './components/curso-material-details/curso-material-details.component';
import { CursoMaterialAddComponent } from './components/curso-material-add/curso-material-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumnos/id/:id', component: AlumnoDetailsComponent },
  { path: 'alumnos/add', component: AlumnoAddComponent },
  { path: 'cursos', component: CursoListComponent },
  { path: 'cursos/id/:id', component: CursoDetailsComponent },
  { path: 'cursos/id/:id/material/id/:idm', component: CursoMaterialDetailsComponent },
  { path: 'cursos/id/:id/material/add', component: CursoMaterialAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
