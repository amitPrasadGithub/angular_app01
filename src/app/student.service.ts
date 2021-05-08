import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Std } from './std';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL: string = 'http://localhost:8085/user/v1';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Std[]> {
    return this.http.get<Std[]>(`${this.baseURL}/getAll`);
  }
}
