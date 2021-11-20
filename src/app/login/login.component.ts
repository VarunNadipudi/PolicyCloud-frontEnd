import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../User';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private RouterObj:Router, private RestServiceObj:RestService) { }

  ngOnInit(): void {
    this.readData();
  }

  // @Output() messageToEmit = new EventEmitter();
  // bLoadHome = "false";

  arrUsers: User[] = [];          //stores the users list

  readData(){

    this.RestServiceObj.getUsers().subscribe(
      (data) =>{
        this.arrUsers = data;
      },

      (error) =>{
        console.log(error);
      }
    );
  
  }

  email:string = "";
  password:string = "";
  
  loadHome(){
    // this.bLoadHome = "true";
    // this.messageToEmit.emit(this.bLoadHome);
    console.log(this.arrUsers)
    let bFlag = false;

    for(var i=0; i<this.arrUsers.length; i++){

      if(this.arrUsers[i].email == this.email && this.arrUsers[i].password == this.password){
        // console.log("Inside if block");
        bFlag = true;
        // let strUrlForHome="home";
        // this.RouterObj.navigate([strUrlForHome]);
      }
      
      // if(this.arrUsers[i].email != this.email && this.arrUsers[i].password != this.password){
      //   // console.log(this.email);
      //   // console.log(this.password);
      //   // alert("Invalid User credentials!!!");  

      //   // this.email = "";
      //   // this.password = "";
      // }

    }

    if(bFlag==true){
      let strUrlForHome="home";
      this.RouterObj.navigate([strUrlForHome]);
    }
    else{
      alert("Invalid User credentials!!!");  

      this.email = "";
      this.password = "";
    }
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
