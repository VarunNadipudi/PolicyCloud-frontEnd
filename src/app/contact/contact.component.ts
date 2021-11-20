import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Query } from '../Query';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private RouterObj: Router, private RestServiceObj: RestService) { }

  ngOnInit(): void {
  }

  name:string = "";
  email:string = "";
  phone:string = "";
  company:string = "";
  message:string = "";

  parseInt(val:string){
    let value = + val;

    return value;
  }

  registerQuery(){
    let newQuery = new Query(this.name, this.email, parseInt(this.phone), this.company, this.message);
    if(this.name!="" && this.email!="" && this.phone!="" && this.company!="" && this.message!=""){
      this.RestServiceObj.insertQuery(newQuery).subscribe(
        (data) =>{
          alert("Submit Query?!");
          let strUrlForHome = "home";
          this.RouterObj.navigate([strUrlForHome]);
        },

        (error) => {
          console.log(error);
        }
      );
    }
  }

}
