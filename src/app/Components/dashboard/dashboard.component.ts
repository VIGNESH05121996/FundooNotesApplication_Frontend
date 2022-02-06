import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { NotificationServicesService } from 'src/app/Services/NotificationServices/notification-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen=true;
  contentMargin=240;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  filterString:any;
  dashBoardHitted:boolean=true;
 
  constructor(private route:Router,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef,
       public notificationServices:NotificationServicesService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=100;
    }
    else{
      this.contentMargin=200;
    }
  }
  
  Notes(){
    this.route.navigateByUrl('dashboard/notes');
  }

  Trash(){
    this.route.navigateByUrl('dashboard/trash');
  }
  Archive(){
    this.route.navigateByUrl('dashboard/archive')
  }
  Logout()
  {
    localStorage.removeItem('token');
    this.route.navigateByUrl('login')
    this.notificationServices.showNotification('Logged out Successfully',' ','','Success');
  }
}
