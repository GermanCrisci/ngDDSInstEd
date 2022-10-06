import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso }    from '../models/curso.model';

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
}