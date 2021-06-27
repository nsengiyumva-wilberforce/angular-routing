import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../SERVICES/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logOut()
    this.router.navigate(['/'])
  }

}
