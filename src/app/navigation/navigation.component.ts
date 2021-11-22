import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private RouterObj: Router, private AuthenticationServiceObj: AuthenticationService) { }

  ngOnInit(): void {
  }

  loadHome(){
    this.RouterObj.navigate(["home"]);
  }

  logoutAuthGuard(){
    this.AuthenticationServiceObj.logout();
  }

}
