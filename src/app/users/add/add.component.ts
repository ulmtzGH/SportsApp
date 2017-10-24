import { Component, OnInit } from '@angular/core';

//Funciones Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  titleAlert:string = 'This field is required';

  //public user:User;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([
        Validators.required, 
        Validators.minLength(3), Validators.maxLength(5)
      ])],
      'validate' : ''
    });
   }

   addPost(post) {
    this.description = post.description;
    this.name = post.name;

    // this.user = new User(post.name,post.description, post.validate + 2, post.validate + 1);
    // this.userService.saveCustomer(this.user);
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
