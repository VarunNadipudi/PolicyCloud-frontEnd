import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private RouterObj:Router) { }

  ngOnInit(): void {
  }

  loadPricing(){
    let strUrlForPricing = "pricing";
    this.RouterObj.navigate([strUrlForPricing]);
  }

}
