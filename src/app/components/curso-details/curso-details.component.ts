import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { Tema } from 'src/app/models/tema.model';
import { Material } from 'src/app/models/material.model';
import { CursoService } from 'src/app/services/curso.service';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {
  materiales?: Material[];
	@Input() curso: Curso = {
    nombre: '',
    tema: undefined,
    fecha_inicio: '',
    id_docente: 0
  };

  constructor(
    private cursoService: CursoService,
    private materialService: MaterialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCurso(this.route.snapshot.params["id"]);
    this.getMateriales(this.route.snapshot.params["id"]);
  }
  
  getCurso(id: string): void {
    this.cursoService.get(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.curso = data;
        },
        error: (e) => console.error(e)
      });
  }

  getMateriales(id: string): void {
    this.materialService.getMaterialesCurso(Number(id))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.materiales = data;
        },
        error: (e) => console.error(e)
      });
  }

}
