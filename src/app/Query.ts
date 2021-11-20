export class Query{
  name:string = "";
  email:string = "";
  phone:number = 0;
  company:string = "";
  message:string = "";

  constructor(name:string, email:string, phone:number, company:string, message:string){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.company = company;
    this.message = message;
  }
}