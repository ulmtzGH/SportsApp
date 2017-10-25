import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

//Modulos Creados
import { UsersModule } from './users/users.module';
import { SportsModule } from './sports/sports.module';

//Ruteo
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './users/index/index.component';
import { AddComponent as SportAddComponent } from './sports/add/add.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
   MatToolbarModule,
} from '@angular/material';

const appRoutes: Routes = [
  { path: 'users/index', component: IndexComponent},
  { path: 'sports/add', component: SportAddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,

    UsersModule,
    SportsModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
     MatToolbarModule,

    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
