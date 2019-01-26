import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserDetailsService } from '../service/user-details.service';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 ContectForm = new  FormGroup({
  fname: new FormControl(''),
  lname: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  message: new FormControl(''),

 });

  user: [];

  constructor(public UserDetails: UserDetailsService , public fb: FormBuilder) { }

  ngOnInit() {

  }

  onClick() {

  }



  onSubmit() {
    alert('hello');
    // TODO: Use EventEmitter with form value
    console.log(this.ContectForm);
  }

}
