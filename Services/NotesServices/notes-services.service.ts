import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
  token:any;
  constructor(private httpService:HttpServiceService) { }
  createNotes(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.postRequest('/Notes',data,true,header);
  }
}


