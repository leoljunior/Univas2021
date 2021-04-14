import { Component } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dicList: Word[] = []
  plv: Word = new Word()

  constructor() { }

  saveWord(form) {
      this.dicList.push(this.plv)
      this.plv = new Word()
      form.resetForm()
  }

  compareWord() {
    if (this.dicList.find(s => s.palavra === this.plv.palavra)) {
      return true
    }
  }
}
