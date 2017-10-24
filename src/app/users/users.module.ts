import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';

//Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddComponent, ListComponent, IndexComponent]
})
export class UsersModule { }
