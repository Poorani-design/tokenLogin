import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  } 
  registerForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required]),
    confirmpass: new FormControl('',[Validators.required]),
  })
  regUser(){
    console.log(this.registerForm.value);
  }
  get user()
  {
    return this.registerForm.get('user');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get pass(){
    return this.registerForm.get('pass');
  }
  get confirmpass(){
    return this.registerForm.get('confirmpass');
  }
}
