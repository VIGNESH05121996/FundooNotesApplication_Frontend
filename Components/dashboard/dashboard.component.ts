import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';

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
  
  constructor(private route:Router,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    
  }
 
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=30;
    }
    else{
      this.contentMargin=300;
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
}
