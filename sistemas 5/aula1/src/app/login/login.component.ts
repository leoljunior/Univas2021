import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = 'tião';
  className = 'blue';
  email: String = 'seuemail@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return 'Univas 2021'
  }

  printHello() {
    if(this.className === 'blue'){
      this.className = 'green'
    }else {
      this.className = 'blue'
    }
    alert('Hello!!!')
  }

  confirmEmail() {
    if (confirm(`Confirme o email: ${this.email}`)) {
      alert('Email enviado!!!!!!')
    }else {
      alert('Email não enviado!!!')
    }
  }

}
