import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../HttpService/http-service.service';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Token } from '@angular/compiler';
=======
>>>>>>> 9398baa6e7aa57bf9c7d2cc3a1db58fe72216037

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

<<<<<<< HEAD
  constructor(private httpService:HttpServiceService,private activatedRoute:ActivatedRoute) { }
=======
  constructor(private httpService:HttpServiceService) { }
>>>>>>> 9398baa6e7aa57bf9c7d2cc3a1db58fe72216037
  registration(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/register',data,false,header);
  }
  logging(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/login',data,false,header);
  }
<<<<<<< HEAD
  forgetPassword(data:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
        
      })
    }
    return this.httpService.postRequest('/User/ForgetPassword',data,false,header);
  }
  resetPassword(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
        
      })
    }
    return this.httpService.putRequest('/User/ResetPassword',data,true,header);
  }
=======
>>>>>>> 9398baa6e7aa57bf9c7d2cc3a1db58fe72216037
}
