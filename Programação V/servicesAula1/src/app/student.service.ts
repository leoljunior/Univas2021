import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[]

  constructor() {
    console.log('Estou no service')
    this.students = []
  }

  save(student: Student){
    this.students.push(student)
  }

}
