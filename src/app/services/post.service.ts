import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

const baseUrl = 'http://localhost:4200/api/posts';
//const baseUrl = 'http://localhost:8080/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }
  get(id: any): Observable<Post> {
    return this.http.get<Post>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
	console.log(data);
	//Conversione a form data
	const formData = new FormData();
	formData.append('title', <string>data.title);
    formData.append('status', <string>data.status);
	formData.append('content', <string>data.content);
    return this.http.post(`${baseUrl}/add`, formData);
  }
  update(id: any, data: Post): Observable<any> {
	//Conversione a form data
	const formData = new FormData();
	formData.append('id', <string>id);
	formData.append('title', <string>data.title);
    formData.append('status', <string>data.status);
	formData.append('content', <string>data.content);
    return this.http.put(`${baseUrl}/update`, formData, {responseType: 'text'});
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, {responseType: 'text'});
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Post> {
    return this.http.get<Post>(`${baseUrl}?title=${title}`);
  }
}
