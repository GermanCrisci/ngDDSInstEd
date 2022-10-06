import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
	constructor(
		private alumnoService: AlumnoService,
		private route: ActivatedRoute,
		private router: Router) { }


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

	public deleteAlumno(id: string): void {
		console.log(id)
		if (confirm("Esta seguro que desea eliminar este alumno?")) {
			this.alumnoService.delete(id)
				.subscribe({
					next: (res) => {
						console.log(res);
						if (res == "OK") {
							alert("Alumno eliminado con exito")
						    window.location.reload();
						} else {
							this.router.navigate(['/alumnos']);
							alert("Error al eliminar alumno")
						}
					},
					error: (e) => console.error(e)
				});

		} else {
			this.router.navigate(['/alumnos']);
		}

	}

	refreshList(): void {
		this.retrieveAlumnos();
		this.currentAlumno = {};
		this.currentIndex = -1;
	}
}