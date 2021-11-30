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


  //to insert the query into the db.json
  insertQuery(query:Query): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(query);

    return this.http.post(this.queryUrl, body,{'headers':header});
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


  // ***************** users routes starts here ********************

  //to get the users list using JSON-SERVER from db.json
  getUsers(): Observable<any> {
    return this.http.get<User>(this.userUrl);
  }

  //to insert the user into the db.json
  insertUser(user:User): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(user);

    return this.http.post(this.userUrl, body,{'headers':header});
  }

  updateUserProfile(user:User): Observable<any> {
    let header = {'content-type':'application/json'};
    let id = user.id;
    let updateUrl = this.userUrl+"/"+id;
    console.log("The url to update is :"+updateUrl);
    return this.http.put(updateUrl, user, {'headers':header});
  }

  // ***************** orders routes starts here ********************
  getOrders(): Observable<any> {
    return this.http.get<Order>(this.orderUrl);
  }

  getCartItems(): Observable<any> {
    return this.http.get<Order>(this.cartUrl);
  }

  insertCartItem(item:Order): Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(item);

    return this.http.post(this.cartUrl, body, {'headers':header})
  }

  deleteCartItem(id:string): Observable<any> {
    let deleteUrl = this.cartUrl + "/" + id;
    //console.log("The url to delete is :"+deleteUrl);

    return this.http.delete(deleteUrl);
  }



}
