import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Order } from '../Order';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private RestServiceObj:RestService, private AuthenticationServiceObj: AuthenticationService, private RouterObj:Router) { }

  ngOnInit(): void {
    this.readData();
  }

  arrOrders: Order[] = [];
  currUserEmail = localStorage.getItem('currentUserEmail');

  readData(){
    this.RestServiceObj.getOrders().subscribe(
      (data) =>{
        // this.arrOrders = data;
        for(var i=0;i<data.length;i++){
          if(data[i].userEmail == this.currUserEmail){
            this.arrOrders.push(data[i]);
          }
        }
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  logout(){
    let strUrlForLogin = "login";
    this.AuthenticationServiceObj.logout();
    this.RouterObj.navigate([strUrlForLogin]);
  }


}
