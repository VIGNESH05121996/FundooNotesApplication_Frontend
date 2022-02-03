import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,public notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
  onSubmitted()
  {
    this.submitted=true;
    if(this.forgetPasswordForm.value)
    {
      console.log(this.forgetPasswordForm.value);
      let requestedData={
        email:this.forgetPasswordForm.value.email
      }
      this.userService.forgetPassword(requestedData).subscribe((response:any)=>{console.log(response)
        if(response.success == true)
        {
          this.notificationServices.showNotification('Forget Password Mail Sent',' ',' ','Success');
        }
      })
    } 
    else
    console.log("invalid");
  }
}
