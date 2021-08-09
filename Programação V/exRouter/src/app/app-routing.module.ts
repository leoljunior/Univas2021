import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent as CreateStudent } from './student/create/create.component';
import { DetailsComponent as StudentDetailsComponent } from './student/details/details.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { CreateComponent as CreateTeacher } from './teacher/create/create.component';
import { DetailComponent as TeacherDetailComponent } from './teacher/detail/detail.component';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';

const routes: Routes = [
  { path: 'listStudent', component: StudentListComponent },
  { path: 'listTeacher', component: TeacherListComponent },
  { path: 'studentDetail/:id', component: StudentDetailsComponent },
  { path: 'createStudent', component: CreateStudent },
  { path: 'createTeacher', component: CreateTeacher },
  { path: 'teacherDetail/:id', component: TeacherDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
