import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { RestService } from '../rest.service';
import { User } from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private RestServiceObj: RestService, private RouterObj: Router, private AuthenticationServiceObj: AuthenticationService) { }

  userId:any = localStorage.getItem('currentUserId');
  userName:any = localStorage.getItem('currentUserName');
  userEmail:any = localStorage.getItem('currentUserEmail');
  userPassword:any = localStorage.getItem('currentUserPassword');


  ngOnInit(): void {
  
  }

  logout(){
    let strUrlForLogin = "login";
    this.AuthenticationServiceObj.logout();
    this.RouterObj.navigate([strUrlForLogin]);
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
    if(confirm("All the cart Items and orders related to the email will be lost!")){
      this.bEditEmail = true;
    }
  }

  saveEmail(){
    this.bEditEmail = false;
    if(localStorage.getItem('currentUserEmail') != this.userEmail){         //if the updated is not equal to existing then only save

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
  }

  editPassword(){
    this.bEditPassword = true;
  }

  savePassword(){
    this.bEditPassword = false;
    if(localStorage.getItem('currentUserPassword') != this.userPassword){
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
  }

  viewOrders(){
    let strUrlForOrders = "orders";
    this.RouterObj.navigate([strUrlForOrders]);
  }

  viewCart(){
    let strUrlForCart = "cart";
    this.RouterObj.navigate([strUrlForCart]);
  }

}
