import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent as StudentCreateComponent } from './student/create/create.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { DetailsComponent as StudentDetailsComponent } from './student/details/details.component';
import { DetailComponent as TeacherDetailComponent } from './teacher/detail/detail.component';
import { CreateComponent as TeacherCreateComponent } from './teacher/create/create.component';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentListComponent,
    StudentDetailsComponent,
    TeacherDetailComponent,
    TeacherCreateComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
