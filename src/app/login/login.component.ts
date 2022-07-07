import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HomeComponent } from '../admin/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor() { }

 ngOnInit(): void {
 }  
 title='login';
 loginForm = new FormGroup({
  user : new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('^[a-zA-Z]*$')]),
  pass : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z1-9 ]*$')]), 
 });

logUser(){
 console.log( this.loginForm.value);
}
get user(){
  return this.loginForm.get('user');
}
get pass(){
  return this.loginForm.get('pass');
}
}