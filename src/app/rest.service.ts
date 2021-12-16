import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from './Policy';
import { User } from './User';
import { Query } from './Query';
import { Order } from './Order';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }


  // ***************** users routes starts here ********************


  //to get the userdata from database
  getUser(email:string, password:string):Observable<any> {
    let header = {'content-type':'application/json'};
    let body = {"email":email, "password":password};
    let url = "http://localhost:8000/user/login";
    // let url = this.userBaseUrl+"login"

    return this.http.post(url, body, {'headers':header});
  }

  //checking if the user exists or not!
  userExists(email:string):Observable<any>{
    let header = {'content-type':'application/json'};
    let body = {"email":email};

    var url = "http://localhost:8000/user/userExists";

    return this.http.post(url, body, {'headers':header, responseType:'text'});
  }

  //to insert the user into the db.json
  insertUser(user:User): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(user);

    var url = "http://localhost:8000/user/signup";

    return this.http.post(url, body,{'headers':header, responseType:'text'});
  }

  //to make the updated changes reflect onto the database
  updateUserProfile(user:User): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(user);
    let url = "http://localhost:8000/user/updateProfile";
    // let id = user.id;
    // let updateUrl = this.userUrl+"/"+id;
    // console.log("The url to update is :"+updateUrl);
    return this.http.put(url, user, {'headers':header, responseType:'text'});
  }

  //storing the payment details onto the database
  paymentDetails(id:number, cardNumber:string, expiry:string, cvv:number, country:string, address:string, cost:number, userEmail:string):Observable<any>{
    let header = {'content-type':'application/json'};
    let body = { "id":id, "cardNumber":cardNumber, "expiry":expiry, "cvv":cvv, "country":country, "address": address, "orderCost":cost, "userEmail":userEmail };

    var url = "http://localhost:8000/user/payment";

    return this.http.post(url, body, {'headers':header, responseType:'text'});
  }





  // ***************** orders routes starts here ********************

  //get all the orders to display them in the past orders page
  getOrders(): Observable<any> {
    var url = "http://localhost:8000/order/getAllItems";
    return this.http.get<Order>(url);
  }

  //to get all the cart items
  getCartItems(): Observable<any> {
    var url = "http://localhost:8000/cart/getAllItems";
    return this.http.get<Order>(url);
  }

  //to insert cart item into the Database
  insertCartItem(item:Order): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(item);

    var url = "http://localhost:8000/cart/insertItem"; 

    return this.http.post(url, body, {'headers':header, responseType:'text'})
  }

  //to delete the cart item from the database
  deleteCartItem(id:string): Observable<any> {
    var deleteUrl = "http://localhost:8000/cart/deleteItem/"+id;

    return this.http.delete(deleteUrl, { responseType : 'text'});
  }

  //deleting all the cart items upon successfull payment and copying them to past orders
  deleteAllCartItems(email:string):Observable<any>{
    let header = {'content-type':'application/json'};
    let body = {"userEmail":email};

    var deleteUrl = "http://localhost:8000/cart/deleteAllItems";

    return this.http.post(deleteUrl, body, {'headers':header});
  }

  // ****************************** contact us details insertion starts here ******************

  //to insert the query into the db.json
  insertQuery(query:Query): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(query);

    var url = "http://localhost:8000/user/insertQuery";

    return this.http.post(url, body,{'headers':header, responseType:'text'});
  }















  // ************************** policy routess with connection to db.json **********************//
  url = "http://localhost:3000/policy";
  userUrl = "http://localhost:3000/users";
  queryUrl = "http://localhost:3000/queries";
  orderUrl = "http://localhost:3000/orders";
  cartUrl = "http://localhost:3000/cart";


  getPolicyHolders(): Observable<any> {
    return this.http.get<Policy>(this.url);
  }


  insertPolicy(policy:Policy): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(policy);

    return this.http.post(this.url, body, {'headers':header});
  }

  deletePolicy(id:string): Observable<any> {
    let deleteUrl = this.url + "/" + id;
    //console.log("The url to delete is :"+deleteUrl);

    return this.http.delete(deleteUrl);
  }

  getUpdatePolicy(id:string): Observable<any> {
    let getUpdateUserUrl = this.url+"/"+id;

    return this.http.get<Policy>(getUpdateUserUrl);
  }

  UpdatePolicy(id:string, policy:Policy): Observable<any> {
    let header = {'content-type':'application/json'};
    let updateUrl = this.url+"/"+id;
    //console.log("The url to update is :"+updateUrl);

    return this.http.put(updateUrl, policy, {'headers':header});
  }

}
