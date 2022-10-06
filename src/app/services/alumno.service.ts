import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno }   from '../models/alumno.model';

const baseUrl = 'http://localhost:4200/api/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(baseUrl);
  }
  get(id: any): Observable<Alumno> {
    return this.http.get<Alumno>(`${baseUrl}/${id}`);
  }
  update(id: any, data: Alumno): Observable<any> {
	//Conversione a form data
	const formData = new FormData();
	formData.append('id', <string>id);
	formData.append('nombre', <string>data.nombre);
	formData.append('fecha_nacimiento', <string>data.fecha_nacimiento);
    return this.http.put(`${baseUrl}/update`, formData, {responseType: 'text'});
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, {responseType: 'text'});
  }
}
