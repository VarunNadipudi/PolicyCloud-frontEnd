import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private RestServiceObj: RestService, private RouterObj: Router) { }

  userId:any = localStorage.getItem('currentUserId');
  userName:any = localStorage.getItem('currentUserName');
  userEmail:any = localStorage.getItem('currentUserEmail');
  userPassword:any = localStorage.getItem('currentUserPassword');


  ngOnInit(): void {
  
  }


  bEditName = false;
  bEditEmail = false;
  bEditPassword = false;

  editName(){
    this.bEditName = true;
  }

  saveName(){
    this.bEditName  = false;
    localStorage.setItem('currentUserName', this.userName);
    var user = new User(this.userId, this.userName, this.userEmail, this.userPassword);
    this.RestServiceObj.updateUserProfile(user).subscribe(
      (data) =>{
        alert("Name is Updated!");
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  // ********************* If Email or password is updated navigate to login page and login again

  editEmail(){
    this.bEditEmail = true;
  }

  saveEmail(){
    this.bEditEmail = false;
    localStorage.setItem('currentUserEmail', this.userEmail);
    var user = new User(this.userId, this.userName, this.userEmail, this.userPassword);
    this.RestServiceObj.updateUserProfile(user).subscribe(
      (data) =>{
        alert("Email is Updated!");
        let strUrlForLogin = "login";
        this.RouterObj.navigate([strUrlForLogin]);
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  editPassword(){
    this.bEditPassword = true;
  }

  savePassword(){
    this.bEditPassword = false;
    localStorage.setItem('currentUserPassword', this.userPassword);
    var user = new User(this.userId, this.userName, this.userEmail, this.userPassword);
    this.RestServiceObj.updateUserProfile(user).subscribe(
      (data) =>{
        alert("Password is Updated!");
        let strUrlForLogin = "login";
        this.RouterObj.navigate([strUrlForLogin]);
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  viewOrders(){

  }

}
