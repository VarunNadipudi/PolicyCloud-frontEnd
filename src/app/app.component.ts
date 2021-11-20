import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restful-services';

  constructor(){}

  ngOnInit(){
    //this.readData();
  }

  bLoadPermission = "";
  getMessage(msg:any){
    this.bLoadPermission = msg;
    console.log(this.bLoadPermission);
  }

}
