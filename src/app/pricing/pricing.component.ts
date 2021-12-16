import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private RestServiceObj: RestService) { }

  ngOnInit(): void {
    this.readData();
  }

  arrCartItems: Order[] = [];
  currentUserEmail:any = localStorage.getItem('currentUserEmail');

  readData(){
    this.RestServiceObj.getCartItems().subscribe(
      (data) =>{
        this.arrCartItems = data;
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  addToCart(planName:string, planCost:number){
    
    var bAddItem = true;

    //finding whether the selected item is already in cart!
    for(var i=0;i<this.arrCartItems.length;i++){
      if(this.arrCartItems[i].planName == planName && this.arrCartItems[i].userEmail == this.currentUserEmail){
        bAddItem = false;
        break;
      }
    }

    //adding item if it not exists in cart.
    if(bAddItem){
      var id = Math.ceil(Math.random() * 100000);
      var item = new Order(id, planName, planCost, this.currentUserEmail);
      this.RestServiceObj.insertCartItem(item).subscribe(
        (data) =>{
          alert(data);
        },

        (error) =>{
          console.log(error);
        }
      );
    }
    else{
      alert("Plan already exists in Cart!!!");
    }
  }

}
