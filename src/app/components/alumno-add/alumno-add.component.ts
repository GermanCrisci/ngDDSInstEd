import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-add',
  templateUrl: './alumno-add.component.html',
  styleUrls: ['./alumno-add.component.css']
})
export class AlumnoAddComponent implements OnInit {

  constructor(
	private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
  }
    
  public addAlumno(nombre: string, fecha: string): void {
	if(nombre.length < 1) {alert("El nombre tiene que tener un largo de al menos 1."); return}
	if(fecha == "") {alert("Por favor inserte una fecha de nacimiento."); return}
    this.alumnoService.add(nombre, fecha)
      .subscribe({
        next: (res) => {
		  // reviso si me devolvio un alumno con id.
          if(typeof res.id === 'undefined') {
          	alert("Alumno creado exitosamente!")
          	this.router.navigate(['/alumnos']);
          } else {
			alert("Hubo un error al crear el alumno.")
	      }
        },        
        error: (e) => console.error(e)
      });
  }
}