import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen=true;
  contentMargin=240;
  constructor(private route:Router) { 
  }

  ngOnInit(): void {
    
  }
 
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=50;
    }
    else{
      this.contentMargin=400;
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
