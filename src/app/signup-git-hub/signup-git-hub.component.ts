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
    this.inputName = this.inputEmail;
    let newUser = new User(this.id, this.inputName, this.inputEmail,this.inputPassword);
    
    if(this.inputEmail!="" && this.inputPassword!=""){

      this.RestServiceObj.insertUser(newUser).subscribe(
        (data) =>{
          let strUrlForLogin = "login";
          this.RouterObj.navigate([strUrlForLogin]);
        },

        (error) =>{
          console.log(error);
        }
      );
    }
  }

}

