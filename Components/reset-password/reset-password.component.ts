import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm:FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required],

    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token');
  }

  resetted()
  {
    this.submitted=true;
    if(this.resetPasswordForm.value)
    {
      console.log(this.resetPasswordForm.value,this.token);
      let reset={
        newPassword:this.resetPasswordForm.value.password,
        confirmPassword:this.resetPasswordForm.value.confirmPassword,

      }
      this.userService.resetPassword(reset,this.token).subscribe((response:any)=>{console.log(response)})
    }
    else
    console.log("invalid");
  }
}
