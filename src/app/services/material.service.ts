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
  getAll(): Observable<Material[]> {
    return this.http.get<Material[]>(baseUrl);
  }
  get(id: any): Observable<Material> {
    return this.http.get<Material>(`${baseUrl}/${id}`);
  }
  update(id: any, data: Material): Observable<any> {
	//Conversione a form data
	const formData = new FormData();
	formData.append('id', <string>id);
	formData.append('titulo', <string>data.titulo);
	formData.append('costo', <number>data.costo);
	formData.append('curso', <Curso>data.curso);
    return this.http.put(`${baseUrl}/update`, formData, {responseType: 'text'});
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, {responseType: 'text'});
  }