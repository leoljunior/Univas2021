import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListCarComponent } from './list-car/list-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    CreateCarComponent,
    DetailCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
