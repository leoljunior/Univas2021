import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CpfPipe } from './cpf.pipe';
import { CellphonePipe } from './cellphone.pipe';

import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(pt)

@NgModule({
  declarations: [
    AppComponent,
    CpfPipe,
    CellphonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ //idioma e dinheiro ficam em ptbr por padrão
    {
      provide: LOCALE_ID,
      useValue: 'pt'     
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
