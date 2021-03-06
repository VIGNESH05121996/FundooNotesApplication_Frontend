import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  passwordHide=true;
  constructor(private formBuilder: FormBuilder,private userServices:UserServiceService,public notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  onSubmitted()
{
  this.submitted=true;
  if(this.registerForm.value)
  {
    console.log(this.registerForm.value);
    let requestData={
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      confirmPassword:this.registerForm.value.confirmPassword
    }
    this.userServices.registration(requestData).subscribe((response:any)=>{console.log(response)
    if(response.success == true)
    {
      this.notificationServices.showNotification('Registration Successful',' ',' ','Success');
    }
    })
  }
  else
  console.log("invalid");
}
}
