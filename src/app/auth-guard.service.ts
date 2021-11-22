import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private RouterObj: Router) { }

  canActivate(){
    let bReturn = true;

    if(localStorage.getItem('isLoggedIn') == 'false'){

      this.RouterObj.navigate(['/hme']);
      bReturn = false;
    }

    return bReturn;
  }
}
