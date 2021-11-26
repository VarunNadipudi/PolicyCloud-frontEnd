import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private RouterObj:Router, private RestServiceObj:RestService) { }

  id:number = Math.ceil(Math.random() * 100000);
  inputEmail:string = "";
  inputName:string = "";
  inputPassword:string = "";

  ngOnInit(): void {

  }

  registerUser(){
    this.inputName = this.inputEmail;       //initially setting name as emailId

    let newUser = new User(this.id,this.inputName, this.inputEmail, this.inputPassword);
    
    if(this.inputEmail!="" && this.inputPassword!=""){

      this.RestServiceObj.insertUser(newUser).subscribe(
        (data) =>{
          let strUrlForLogin = "login";
          alert("Sign up successful!");
          this.RouterObj.navigate([strUrlForLogin]);
        },

        (error) =>{
          console.log(error);
        }
      );
    }
  }

}
