import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServicesService {

  constructor() { }
  gettoken(){
    return !!localStorage.getItem('token');
  }
}
