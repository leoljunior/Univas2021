import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent as CreateStudent } from './student/create/create.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { CreateComponent as CreateTeacher } from './teacher/create/create.component';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';

const routes: Routes = [
  { path: 'listStudent', component: StudentListComponent },
  { path: 'listTeacher', component: TeacherListComponent },
  { path: 'createStudent', component: CreateStudent },
  { path: 'createTeacher', component: CreateTeacher }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
