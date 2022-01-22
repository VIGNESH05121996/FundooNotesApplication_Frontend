import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }
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
}
