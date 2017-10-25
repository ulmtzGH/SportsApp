import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';

//Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDataServerService } from './user-data-server.service';
import {HttpClientModule} from '@angular/common/http';


//Material
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {  
//   MatButtonModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatRadioModule,
//   MatSelectModule,
//   MatTableModule,
//    MatToolbarModule,
// } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // BrowserAnimationsModule,
    // MatButtonModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatTableModule,
    //  MatToolbarModule,
  ],
  declarations: [AddComponent, ListComponent, IndexComponent],
  providers:[UserDataServerService, ListComponent]
})
export class UsersModule { }
