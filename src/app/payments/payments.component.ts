import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private RestServiceObj:RestService) { }

  arrCartItems:Order[] = [];
  currUserEmail = localStorage.getItem('currentUserEmail');
  cost:number = 0;

  ngOnInit(): void {
    this.readData();
  }

  readData(){
    this.RestServiceObj.getCartItems().subscribe(
      (data) =>{
        // this.arrOrders = data;
        for(var i=0;i<data.length;i++){
          if(data[i].userEmail == this.currUserEmail){
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

}
