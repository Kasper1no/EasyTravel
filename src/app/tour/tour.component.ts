import { Component } from '@angular/core';
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {
  

  clickedId: number = 3;
  click(id: number) {
    this.clickedId = id;
  }
}
