import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Order';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(private RestServiceObj:RestService, private RouterObj:Router) { }

  ngOnInit(): void {
    this.readData();
  }

  arrCartItems:Order[] = [];
  currUserEmail:any = localStorage.getItem('currentUserEmail');
  cost:number = 0;

  readData(){
    this.RestServiceObj.getCartItems().subscribe(
      (data) =>{
        // this.arrOrders = data;
        console.log(data);
        for(var i=0;i<data.length;i++){
          if(data[i].userEmail == this.currUserEmail){
            this.cost += data[i].planCost;
            this.arrCartItems.push(data[i]);
          }
        }
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  loadProfile(){
    var strUrlForProfile = "profile";
    this.RouterObj.navigate([strUrlForProfile]);
  }

  loadHome(){
    this.RestServiceObj.deleteAllCartItems(this.currUserEmail).subscribe(
      (data)=>{
        this.readData();
      },

      (error)=>{
        console.log(error);
      }
    );

    this.RouterObj.navigate(["home"]);
  }
  

}
