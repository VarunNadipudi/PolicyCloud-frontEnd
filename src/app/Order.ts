export class Order{
  id:number = 0;
  planName:string = "";
  planCost:number = 0;
  userEmail:string = "";

  constructor(id:number, planName:string, planCost:number, userEmail:string){
    this.id = id;
    this.planName = planName;
    this.planCost = planCost;
    this.userEmail = userEmail;
  }
}