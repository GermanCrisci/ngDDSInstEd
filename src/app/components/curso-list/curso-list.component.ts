import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
	selector: 'app-curso-list',
	templateUrl: './curso-list.component.html',
	styleUrls: ['./curso-list.component.css']
})


export class CursoListComponent implements OnInit {
	cursos?: Curso[];
	currentCurso: Curso = {};
	currentIndex = -1;
	
	nombre = '';
	constructor(
		private cursoService: CursoService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		this.retrieveCursos();
	}
	retrieveCursos(): void {
		this.cursoService.getAll()
			.subscribe({
				next: (data) => {
					this.cursos = data;
					console.log(data);
				},
				error: (e) => console.error(e)
			});
	}

	refreshList(): void {
		this.retrieveCursos();
		this.currentCurso = {};
		this.currentIndex = -1;
	}
}