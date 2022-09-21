import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  senha = "";
  email = localStorage.getItem('email');


    cadastrar(){
    fetch('https://api-firebase.vercel.app/api/usuarios', {
        method: 'POST',
        body: JSON.stringify({email: this.email, senha: this.senha}),
        headers: {'Content-Type': 'application/json'}})
        this.router.navigate(['/main/']);
}

}
