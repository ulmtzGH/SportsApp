import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs"

@Injectable()
export class UserDataServerService {

  usersList: Array<User>;
  data: Array<User>;
  stop:boolean;
  
    constructor(private http: HttpClient) {
  
    }
  
    loadCustomers() {
       this.http.get('http://localhost:54751/api/UserApi').subscribe(data => {
        //this.http.get('http://localhost:54751/Person/GetAllUsers').subscribe(data => {
        this.usersList = data as Array<User>;
      });
    //  this.data.push({ name: "Ulises", address: "Puruandiro", gender: 1, rol:1});
    //  this.data.push({ name: "Marco", address: "Morelia", gender: 1, rol:2});

    //   this.usersList = this.data;
    }
  
    saveCustomer(user:User){    
      this.stop = true;
      let queryString:string =  `?name=${user.Name}&gender=${user.Gender}&address=${user.Address}&rol=${user.Rol}`;
      this.http.get('http://localhost:54751/Person/SaveUser'+queryString).subscribe(data => {
        this.loadCustomers();
      });
      Observable.interval(500)
      .takeWhile(() => this.stop)
      .subscribe(i => { 
        this.stop = false;
        this.loadCustomers();
      })
      //this.usersList.push(user);
    }
}