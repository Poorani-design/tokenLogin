import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    Router,
  ]
})
export class LoginModule {  
  
}


