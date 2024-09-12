import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private activeTabSubject = new BehaviorSubject<string>('default');
  activeTab$ = this.activeTabSubject.asObservable();

  setActiveTab(tab: string) {
    console.log("ACTIVE TAB: " + tab);
    this.activeTabSubject.next(tab);
  }
}
