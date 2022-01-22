import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
private BackendBaseUrl="https://localhost:44365/api";
  constructor(private httpClient:HttpClient) { }
  postRequest(url:any,data:any,token:boolean=false,httpOptions:any)
  {
    return this.httpClient.post(this.BackendBaseUrl+url,data,token && httpOptions);
  }
}