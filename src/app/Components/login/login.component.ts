import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';
import { Router } from '@angular/router';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted = false;
  passwordHide=true;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private route:Router,
    private notificationServices:NotificationServicesService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    
  }

  onSubmitted()
  {
    this.submitted=true;
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let requestedData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.userService.logging(requestedData).subscribe((response:any)=>{
        localStorage.setItem('token',response.jwtToken)
        if(response.success == true)
        {
          this.notificationServices.showNotification('Login Successful',' ',' ','Success');
          this.route.navigateByUrl('dashboard')
          console.log(response)
        }
    },(error:Response)=>{
      if(error.status == 404)
      {
        this.notificationServices.showNotification('Login Failed',' ','Email or Password wrong','Error');
      }
    })
    }
    else
    console.log("invalid");
  }
}
