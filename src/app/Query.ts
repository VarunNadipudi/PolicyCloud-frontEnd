export class Query{
  id:number = 0;
  name:string = "";
  email:string = "";
  phone:number = 0;
  company:string = "";
  message:string = "";

  constructor(id:number, name:string, email:string, phone:number, company:string, message:string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.company = company;
    this.message = message;
  }
}