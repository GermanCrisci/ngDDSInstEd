import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso }    from '../models/curso.model';
import { Material } from '../models/material.model';
import { Alumno }   from '../models/alumno.model';
import { Tema }     from '../models/tema.model';

const baseUrl = 'http://localhost:4200/api/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(baseUrl);
  }
  get(id: any): Observable<Curso> {
    return this.http.get<Curso>(`${baseUrl}/${id}`);
  }
  update(id: any, data: Curso): Observable<any> {
	//Conversione a form data
	const formData = new FormData();
	formData.append('id', <string>id);
	formData.append('tema', <Tema>data.tema);
	formData.append('fecha_inicio', <string>data.tema);
	formData.append('id_docente', <string>data.tema);
	formData.append('materiales', <Material[]>data.materiales);
	formData.append('alumnos', <Alumno[]>data.alumnos);
    return this.http.put(`${baseUrl}/update`, formData, {responseType: 'text'});
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, {responseType: 'text'});
  }
}