import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  regUser(username, userType){
    let obj = {
      username, userType
    }
localStorage.setItem('user', JSON.stringify(obj))
  }
  isLoggedIn(){
    let user = localStorage.getItem('user');
    if(user){
      return true
    }else{
      return false
    }
  }
  isAdmin(){
    if(!this.isLoggedIn()){
      return false
    }else{
      let user = JSON.parse(localStorage.getItem('user'))
      if(user.userType == 'admin'){
      return true
      }else{
        return false
      }
    }
    
  }
  logOut(){
    return localStorage.removeItem('user');
  }
}
