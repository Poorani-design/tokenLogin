import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
   {path :'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'admin/home',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
