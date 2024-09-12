import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { TabService } from './tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tour';
  constructor(private router: Router, private tabService: TabService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        console.log("URL : "+url);
        let activeTab = 'tour';
        
        if (url.includes('/about')) {
          activeTab = 'about';
        } else if (url.includes('/contact')) {
          activeTab = 'contact';
        } else if (url.includes('/search') || url.includes('/tour-info')) {
          activeTab = 'search';
        } else if(url.includes('/tour')){
          activeTab = 'tour';
        } else if( url.includes('/blogs') || url.includes('/blog')) {
          activeTab = 'blogs';
        }
        console.log("APP ACTIVE: "+activeTab);
        this.tabService.setActiveTab(activeTab);
      }
    });
  }
}
