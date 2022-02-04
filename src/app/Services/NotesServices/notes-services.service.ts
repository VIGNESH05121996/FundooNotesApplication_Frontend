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
  getAllNotes(token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.getRequest('/Notes',true,header);
  }
  updateNotes(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer '+ token
        
      })
    }
    return this.httpService.putRequest('/Notes/'+data.notesId,data,true,header);
  }
  trashNotes(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.putRequest('/Notes/'+data.notesId+'/Trash',data,true,header);
  }
  archiveNotes(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.putRequest('/Notes/'+data.notesId+'/Archive',data,true,header);
  }
  colorNotes(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.putRequest('/Notes/'+data.notesId+'/Color',data,true,header);
  }

  deleteNotes(data:any,token:any)
  {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization:'Bearer '+ token
        
      })
    }
    return this.httpService.deleteRequest('/Notes/'+data.notesId,true,header);
  }
}


