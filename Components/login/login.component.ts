import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }
  logged()
  {
    this.submitted=true;
    if(this.loginForm.value)
    {
      console.log(this.loginForm.value);
      let login={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.userService.logging(login).subscribe((response:any)=>{console.log(response)})
    }
    else
    console.log("invalid");
  }
}
