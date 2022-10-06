import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css']
})
export class AlumnoDetailsComponent implements OnInit {
  @Input() currentAlumno: Alumno = {
    nombre: '',
    fecha_nacimiento: ''
  };
  
  constructor(
	private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
     this.getAlumno(this.route.snapshot.params["id"]);
  }
  
  getAlumno(id: string): void {
    this.alumnoService.get(id)
      .subscribe({
        next: (data) => {
          console.log(data);
		  this.currentAlumno = data;
        },
        error: (e) => console.error(e)
      });
  }
  
  public updateAlumno(id: string, nombre: string, fecha: string): void {
	if(nombre.length < 1) {alert("El nombre tiene que tener un largo de al menos 1."); return}
    this.currentAlumno = {id: Number(id), nombre: nombre, fecha_nacimiento: fecha};
    console.log(this.currentAlumno)
    this.alumnoService.update(this.currentAlumno.id, this.currentAlumno)
      .subscribe({
        next: (res) => {
          console.log(res);
          if(res == "OK") {
          	alert("Alumno actualizado exitosamente!")
          } else {
			alert("Hubo un error al guardar los cambios.")
	      }
        },        
        error: (e) => console.error(e)
      });
  }
}
