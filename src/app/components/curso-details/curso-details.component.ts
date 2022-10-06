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

  public addMaterial(id_curso: string, titulo: string, costo: string, stock: string): void {
    if(titulo.length < 1) {alert("El nombre tiene que tener un largo de al menos 1."); return}
    console.log(id_curso)
    console.log(titulo)
    console.log(costo)
    console.log(stock)
  
    this.materialService.create(id_curso, titulo, costo, stock)
        .subscribe({
          next: (res) => {
            console.log(res)
            if(typeof res.id !== 'undefined') {
              alert("Material creado exitosamente!")
              window.location.reload();
            } else {
              alert("Hubo un error al crear el Material.")
            }
          },        
          error: (e) => console.error(e)
        });
  }

  public deleteMaterial(id: string): void {
		console.log(id)
		if (confirm("Esta seguro que desea eliminar este material?")) {
			this.materialService.delete(id)
				.subscribe({
					next: (res) => {
						console.log(res);
						if (res == "OK") {
							alert("Material eliminado con exito")
						    window.location.reload();
						} else {
							alert("Error al eliminar material")
						}
					},
					error: (e) => console.error(e)
				});

		} else {
			this.router.navigate(['/materials']);
		}
	}
}
