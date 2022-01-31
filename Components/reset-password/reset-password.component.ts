import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm:FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private activatedRoute:ActivatedRoute,
    public notificationServices:NotificationServicesService,private route:Router) { }
  
  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required],

    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token');
  }

  onSubmitted()
  {
    this.submitted=true;
    if(this.resetPasswordForm.value)
    {
      console.log(this.resetPasswordForm.value,this.token);
      let requestedData={
        newPassword:this.resetPasswordForm.value.password,
        confirmPassword:this.resetPasswordForm.value.confirmPassword,

      }
      this.userService.resetPassword(requestedData,this.token).subscribe((response:any)=>{console.log(response)
        if(response.success == true)
        {
          this.route.navigateByUrl('login')
          this.notificationServices.showNotification('Password Reset Successful',' ','Try Login','Success');
        }
      })
    }
    else
    console.log("invalid");
  }
}
