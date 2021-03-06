import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[] = []

  constructor() { }

  getAll() {
    return this.teachers
  }

  save(teacher: Teacher) {
    this.teachers.push(teacher)
  }

  getById(id: number) {
    return this.teachers.find(xuxa => xuxa.id === id)
  }
}
