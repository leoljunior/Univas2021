import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenAComponent } from './screen-a/screen-a.component';
import { ScreenBComponent } from './screen-b/screen-b.component';
import { ScreenCComponent } from './screen-c/screen-c.component';

const routes: Routes = [
  { path: 'tela-a', component: ScreenAComponent },
  { path: 'tela-b', component: ScreenBComponent },
  { path: 'tela-c', component: ScreenCComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
