import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email]
    });
  }
  forgetPassword()
  {
    console.log(this.forgetPasswordForm.value)
  }
}
