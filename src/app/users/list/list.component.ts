import { Component, OnInit } from '@angular/core';

//import { UserDataServerService } from '../user-data-server.service';
import { User } from '../user';

// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userListLocal:Array<User>;
  // constructor(private userService:UserDataServerService) { }
  constructor() { }

  ngOnInit() {
    // this.u = {Name:"Ulises",Address:"Puruandiro",Rol:1,Gender:1}
    // this.userListLocal.push(this.u)
    this.userListLocal = [
          {
            Name: "Jose",
            Address: "Vereda La Estampilla",
            Gender: 1,
            Rol: 1
          },
          {
            Name: "María",
            Address: "Fátima",
            Gender: 0,
            Rol: 4
          }
      
      ];
    //this.userService.loadCustomers();
  }

  getGenderOptions() {
    return [
      "Female",
      "Male"
    ]
  };

  public saveCustomer(user: User) {
  
      if(!this.userListLocal){
        this.ngOnInit();
      }
      
      this.userListLocal.push({
        Name: user.Name,
        Address: user.Address,
        Gender: user.Gender,
        Rol: user.Rol
      });
    }

}
