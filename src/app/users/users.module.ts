import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';

//Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDataServerService } from './user-data-server.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AddComponent, ListComponent, IndexComponent],
  providers:[UserDataServerService]
})
export class UsersModule { }
