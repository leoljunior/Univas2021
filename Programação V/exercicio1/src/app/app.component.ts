import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  studentList: Student[] = []

  ngOnInit() {
    for (let i = 0; i < 5; i++){
      let student = new Student()
      student.name = 'Aluno' + (i + 1)
      student.cpf = '74' + i + '81' + i + '28' + i
      student.cellphone = '988' + i + '2-2' + i + '36' + i
      student.birthday = (i + 3) + '/04/2000'

      this.studentList.push(student)
      console.log(this.studentList)
    }
  }


}
