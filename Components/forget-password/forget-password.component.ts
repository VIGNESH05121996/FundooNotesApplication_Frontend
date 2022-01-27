import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
  forgotten()
  {
    this.submitted=true;
    if(this.forgetPasswordForm.value)
    {
      console.log(this.forgetPasswordForm.value);
      let forgetEmail={
        email:this.forgetPasswordForm.value.email
      }
      this.userService.forgetPassword(forgetEmail).subscribe((response:any)=>{console.log(response)})
    } 
    else
    console.log("invalid");
  }
}
