import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Order';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private RestServiceObj:RestService, private RouterObj:Router) { }

  arrCartItems:Order[] = [];

  ngOnInit(): void {
    this.readData();
  }
  id:number = Math.ceil(Math.random() * 100000);
  cardNumber:string = "";
  expiry:string = "";
  cvv:number = 0;
  country:string = "";
  address:string = "";
  cost:number = 0;
  userEmail:any = localStorage.getItem('currentUserEmail');

  readData(){
    this.RestServiceObj.getCartItems().subscribe(
      (data) =>{
        // this.arrOrders = data;
        for(var i=0;i<data.length;i++){
          if(data[i].userEmail == this.userEmail){
            this.arrCartItems.push(data[i]);
            this.cost += data[i].planCost;
          }
        }
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  pay(cardNumber:string, expiry:string, cvv:string, country:string, address:string){
    if(cardNumber!="" && expiry!="" && cvv!="" && country!="" && address!=""){
      var regex = new RegExp("^[0-9]{16}$");

      //validating the cardNumber to be 16 digits
      if(regex.test(cardNumber)){
        this.cardNumber = cardNumber;
        this.expiry = expiry;
        this.cvv = +cvv;          // + converts the string to integer
        this.country = country;
        this.address = address;
        
        this.RestServiceObj.paymentDetails(this.id, this.cardNumber, this.expiry, this.cvv, this.country, this.address, this.cost, this.userEmail).subscribe(
          (data)=>{
            alert(data);
            if(data=="Payment successful!"){
              // var strUrlForHome = "home";
              // this.RouterObj.navigate([strUrlForHome]);
              var strUrlForPlacedOrder = "orderConfirmation";
              this.RouterObj.navigate([strUrlForPlacedOrder]);
            }
          },

          (error)=>{
            console.log(error);
          }
        );
      }
      else{
        alert("Invalid Card Number!");
      }
    }
    else{
      alert("Please fill all the fields!");
    }
  }


}
