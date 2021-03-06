import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenAComponent } from './screen-a/screen-a.component';
import { ScreenBComponent } from './screen-b/screen-b.component';
import { ScreenCComponent } from './screen-c/screen-c.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenAComponent,
    ScreenBComponent,
    ScreenCComponent,
    InitialScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
