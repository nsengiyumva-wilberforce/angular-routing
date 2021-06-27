import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../SERVICES/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userTypes = [
    {type:'admin'},
    {type:'customer'}
  ]
  email:string=''
  password:string=''
  userType:string

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
submit(){
this.auth.regUser(this.email, this.userType)
this.router.navigate(['/'])
}
}
