import { Component, OnInit } from '@angular/core';
import { Std } from '../std';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  students: Std[] = [];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.service.getAllStudents().subscribe(
      data => {
        this.students = data;
      }
    )
  }

}
