import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student-model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public students:Student[] = [];
  constructor(private studentService: StudentService) { }
  
  public ngOnInit(): void {
    this.studentService.getStudentList().subscribe((data:Student[]) => {
      this.students = data;
    });
  }

}