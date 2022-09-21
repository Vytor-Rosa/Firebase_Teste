import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private router: Router) { }

  email = "";

  ngOnInit() {
    
  }

  evandro(){    
    if(this.email != ""){
        localStorage.setItem('email', this.email);
    }
    this.router.navigate(['/senha/']);
}

}
