import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  public getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>('/assets/student.json');
  }
}
