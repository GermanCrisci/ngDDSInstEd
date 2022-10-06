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
     this.getPost(this.route.snapshot.params["id"]);
  }
  getPost(id: string): void {
    this.alumnoService.get(id)
      .subscribe({
        next: (data) => {
          console.log(data);
		  this.currentAlumno = data;
        },
        error: (e) => console.error(e)
      });
  }

}
