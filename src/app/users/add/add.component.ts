import { Component, OnInit } from '@angular/core';

//Funciones Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Backend
import { User } from '../user';
//import { UserDataServerService } from '../user-data-server.service';

//Local Data
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //Reactive Forms
  rForm: FormGroup;
  post:any;                     // propiedad para el submit del form
  description:string = '';
  name:string = '';
  // rol:number = 0;
  // gender:number = 1;
  titleAlert:string = 'This field is required';

  public user:User;

  // constructor(private fb: FormBuilder, private userService:UserDataServerService) {
  //   this.clearForm();
  //  }
  constructor(private fb: FormBuilder, private lc: ListComponent) {
    this.clearForm();
   }

   clearForm(){
    this.rForm = this.fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([
        Validators.required, 
        Validators.minLength(3), Validators.maxLength(5)
      ])],
      'validate' : '',
      'rol' : 0,
      'gender' : 1
    });

    this.name = '';
   }

   addPost(post) {
    this.description = post.description;
    this.name = post.name;

    // this.user = new User(post.name,post.description, post.validate + 1, post.validate + 0);
    this.user = new User(post.name,post.description,post.rol + 0,post.gender);
    //this.userService.saveCustomer(this.user);

    //Datos Local
    this.lc.saveCustomer(this.user);
  }

  ngOnInit() {
    //this.user = new User("","", 1, 0);
    this.rForm.get('validate').valueChanges.subscribe(
            (validate) => {
                if (validate == '1') {
                    this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                    this.titleAlert = 'You need to specify at least 3 characters';
                } else {
                    this.rForm.get('name').setValidators(Validators.required);
                    this.titleAlert = 'This field is required';
                }
                this.rForm.get('name').updateValueAndValidity();
            });
  }

}
