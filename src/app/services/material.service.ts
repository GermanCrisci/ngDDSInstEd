import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso }    from '../models/curso.model';
import { Material } from '../models/material.model';

const baseUrl = 'http://localhost:4200/api/cursos';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }
  
  create(data: any): Observable<Material> {
  	const formData = new FormData();
	formData.append('titulo', <string>data.titulo);
	formData.append('costo', <string>data.costo);
	formData.append('id_curso', <string>data.id_curso);
	formData.append('stock', <string>data.stock);
    return this.http.post(`${baseUrl}/add`, formData);
  }
  
  getMaterialesCurso(id_curso: number): Observable<Material[]> {
    return this.http.get<Material[]>(`$cursos/${id_curso}/materiales`);
  }

  updateMaterial(id: any, data: any): Observable<any> {
	//Conversione a form data
	const formData = new FormData();
	formData.append('id', <string>id);
	formData.append('titulo', <string>data.titulo);
	formData.append('costo', <string>data.costo);
	formData.append('id_curso', <string>data.id_curso);
	formData.append('stock', <string>data.stock);
    return this.http.put(`${baseUrl}/update`, formData, {responseType: 'text'});
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, {responseType: 'text'});
  }
 }