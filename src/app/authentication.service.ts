import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  varIsLoggedIn = "isLoggedIn";
  varcurrentUserId = "currentUserId";
  varcurrentUserName = "currentUserName";
  varcurrentUserEmail = "currentUserEmail";
  varcurrentUserPassword = "currentUserPassword";

  login(id:any, name:string, email:string, pswd:string){
    localStorage.setItem(this.varIsLoggedIn, 'true');
    localStorage.setItem(this.varcurrentUserId, id);
    localStorage.setItem(this.varcurrentUserEmail, email);      //storing current user email and pswd in local storage so that other components can use it.
    localStorage.setItem(this.varcurrentUserName, name); 
    localStorage.setItem(this.varcurrentUserPassword, pswd);
  }

  logout(){
    localStorage.setItem(this.varIsLoggedIn, 'false');
    localStorage.setItem(this.varcurrentUserId, "");
    localStorage.setItem(this.varcurrentUserEmail, "");
    localStorage.setItem(this.varcurrentUserName, ""); 
    localStorage.setItem(this.varcurrentUserPassword, "");
  }
}
