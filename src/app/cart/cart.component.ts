import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Order';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private RouterObj: Router, private RestServiceObj: RestService) { }

  ngOnInit(): void {
    this.readData();
  }

  arrCartItems: Order[] = [];
  currUserEmail = localStorage.getItem('currentUserEmail');

  readData(){
    this.RestServiceObj.getCartItems().subscribe(
      (data) =>{
        // this.arrOrders = data;
        for(var i=0;i<data.length;i++){
          if(data[i].userEmail == this.currUserEmail){
            this.arrCartItems.push(data[i]);
          }
        }
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  logout(){
    this.RouterObj.navigate(["login"])
  }

  deleteItem(id:number){

    //clearing arrItems so that the data wont get repeated after receiving new table with the element deleted.
    this.arrCartItems.splice(0,this.arrCartItems.length);       //this makes sure not to display previous + deleted table at once ....without this the display will be all the previous elements plus now the new deleted elements from 1 to n
                                                                

    this.RestServiceObj.deleteCartItem(id.toString()).subscribe(
      (data) =>{
        this.readData();
        console.log("Item with id : "+id+" is deleted!");
      },

      (error) =>{
        console.log(error);
      }
    );
  }

}
