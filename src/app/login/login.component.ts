import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../User';
import { EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private RouterObj:Router, private RestServiceObj:RestService, private AuthenticationServiceObj: AuthenticationService) { }

  ngOnInit(): void {
    // this.readData();
  }

  // @Output() messageToEmit = new EventEmitter();
  // bLoadHome = "false";

  //arrUsers: User[] = [];          //stores the users list

  // readData(){

  //   this.RestServiceObj.getUsers().subscribe(
  //     (data) =>{
  //       this.arrUsers = data;
  //     },

  //     (error) =>{
  //       console.log(error);
  //     }
  //   );
  
  // }

  id:number = 0;
  name:string = "";
  email:string = "";
  password:string = "";
  
  loadHome(){

    this.RestServiceObj.getUser(this.email, this.password).subscribe(
      (data)=>{
        console.log(data);
        if(data.length > 0){
          this.AuthenticationServiceObj.login(data[0].id, data[0].name, data[0].email, data[0].password);          //this makes isLoggedIn variable true in local storage
          let strUrlForHome="home";
          this.RouterObj.navigate([strUrlForHome]);
        }
        else{
          alert("Invalid User credentials!!!");  
          this.email = "";
          this.password = "";
        }
      },

      (error)=>{
        console.log(error);
      }
    );
  }

  // bGoogle = "false";
  // bGithub = "false";
  loadSignup(){
    // this.bGoogle = "true";
    let strUrlForSignup = "signup";
    this.RouterObj.navigate([strUrlForSignup]);
  }

  loadSignupGitHub(){
    // this.bGoogle = "true";
    let strUrlForSignup = "signupGitHub";
    this.RouterObj.navigate([strUrlForSignup]);
  }

}
