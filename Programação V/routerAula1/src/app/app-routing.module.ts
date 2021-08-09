import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { ScreenAComponent } from './screen-a/screen-a.component';
import { ScreenBComponent } from './screen-b/screen-b.component';
import { ScreenCComponent } from './screen-c/screen-c.component';

const routes: Routes = [
  { path: 'tela-a', component: ScreenAComponent },
  { path: 'tela-b', component: ScreenBComponent },
  { path: 'tela-c', component: ScreenCComponent },
  { path: 'telaInicial', component: InitialScreenComponent },
  { path: '', pathMatch: 'full', redirectTo: 'telaInicial'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
