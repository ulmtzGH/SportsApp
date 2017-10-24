import { Component, OnInit } from '@angular/core';

import { UserDataServerService } from '../user-data-server.service';
import { User } from '../user';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService:UserDataServerService) { }

  ngOnInit() {
    this.userService.loadCustomers();
  }

  getGenderOptions() {
    return [
      "Female",
      "Male"
    ]
  };

}
