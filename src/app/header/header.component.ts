import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeTab: string | undefined;

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });
  }
}
