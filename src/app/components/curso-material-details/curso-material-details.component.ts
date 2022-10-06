import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';

@Component({
	selector: 'app-curso-material-details',
	templateUrl: './curso-material-details.component.html',
	styleUrls: ['./curso-material-details.component.css']
})
export class CursoMaterialDetailsComponent implements OnInit {
  @Input() material: Material = {
    id: 0,
    id_curso: 0,
    titulo: '',
    costo: 0,
    stock: 0
  };
  
  constructor(
	private materialService: MaterialService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit(): void {
     this.getMaterial(this.route.snapshot.params["idm"]);
  }
  
  getMaterial(id: number): void {
    this.materialService.get(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.material = data;
        },
        error: (e) => console.error(e)
      });
  }
  
  public updateMaterial(id: string, id_curso: string, titulo: string, costo: string, stock: string): void {
	if(titulo.length < 1) {alert("El nombre tiene que tener un largo de al menos 1."); return}
    this.material = {id: Number(id), id_curso: Number(id_curso), titulo: titulo, costo: Number(costo), stock: Number(stock) };
    console.log(this.material)
    this.materialService.updateMaterial(this.material.id, this.material)
      .subscribe({
        next: (res) => {
          console.log(res);
          if(res == "OK") {
          	alert("Material actualizado exitosamente!")
          } else {
            alert("Hubo un error al guardar los cambios.")
          }
        },        
        error: (e) => console.error(e)
      });
  }
}
