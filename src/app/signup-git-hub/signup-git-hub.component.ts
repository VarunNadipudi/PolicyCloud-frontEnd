import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../User';

@Component({
  selector: 'app-signup-git-hub',
  templateUrl: './signup-git-hub.component.html',
  styleUrls: ['./signup-git-hub.component.css']
})
export class SignupGitHubComponent implements OnInit {

  constructor(private RouterObj:Router, private RestServiceObj:RestService) { }

  id:number = Math.ceil(Math.random() * 100000);
  inputName:string = "";
  inputEmail:string = "";
  inputPassword:string = "";

  ngOnInit(): void {

  }

  registerUser(){
    
    if(this.inputEmail!="" && this.inputPassword!=""){

      var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      //validating the email with regex if true then only attempting to signup else throwing invalid email.
      if(regexp.test(this.inputEmail)){
        this.inputName = this.inputEmail;       //initially setting name as emailId
        let newUser = new User(this.id,this.inputName, this.inputEmail, this.inputPassword);

        //first checking whether the user exists or not, then only registering the user
        this.RestServiceObj.userExists(this.inputEmail).subscribe(
          (data)=>{
            if(data == "false"){
              this.RestServiceObj.insertUser(newUser).subscribe(
                (data) =>{
                  alert(data);
                  
                  let strUrlForLogin = "login";
                  this.RouterObj.navigate([strUrlForLogin]);
                },
        
                (error) =>{
                  console.log(error);
                }
              );
            }
            else{
              alert("User already exists!");
              this.inputEmail = "";
              this.inputPassword = "";

              let strUrlForLogin = "login"
              this.RouterObj.navigate([strUrlForLogin]);
            }
          },

          (error)=>{
            console.log(error);
          }
        );
      }
      else{
        alert("Invalid Email Address!");
        this.inputEmail = "";
        this.inputPassword = "";
      }

    }
  }
  
}

