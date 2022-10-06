import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {
  alumnos?: Alumno[];
  currentAlumno: Alumno = {};
  currentIndex = -1;
  nombre = '';
  constructor(private alumnoService: AlumnoService) { }
  ngOnInit(): void {
    this.retrieveAlumnos();
  }
  retrieveAlumnos(): void {
    this.alumnoService.getAll()
      .subscribe({
        next: (data) => {
          this.alumnos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveAlumnos();
    this.currentAlumno = {};
    this.currentIndex = -1;
  }
}