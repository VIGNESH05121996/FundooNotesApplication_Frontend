import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'', redirectTo:"/dashboard", pathMatch:'full' },
    {path:'createNote', component:CreateNoteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
