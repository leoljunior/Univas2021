import { Component } from '@angular/core';
import { Student} from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  student: Student = new Student()
  students: Student[] = []

  saveData(form) {
    
    console.log('Salvando os dados')

    if (!this.student.id) {
      this.student.id = (new Date()).getTime()
      this.students.push(this.student)

    } else {
      let oldStudent = this.students.find(s => s.id === this.student.id) //compare se na lista student ja tem um elemento com
      oldStudent.name = this.student.name
      oldStudent.email = this.student.email
    }                                                                    //mesmo id do estudante a ser editado
    this.student = new Student()
    form.resetForm()
  }


  editStudent(stud: Student) {
    this.student = new Student(
      stud.id,
      stud.name,
      stud.email
    )
  }


  removeStudent(stud: Student) {
    let index = this.students.findIndex(s => s.id === stud.id)
    this.students.splice(index, 1) //splice remove a partir do index somente 1 posição
  }                                //sem o 1 ele removeria tudo após o index
}
