import { Component, Input } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent {
  isOpen = false;
  @Input() tourId: number = 0;
  success: boolean = false;
  validationAlarm: boolean = false;
  static flag: boolean = false;

  constructor(private apiService: ApiService) {}
  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  async makeOrder(order: { email: string }) {
    let email = order['email'];
    let orders = await this.apiService.getOrders();
    if (!this.validationAlarm) {
      orders.forEach(order => {
        if (order.email === email && this.tourId == order.tour_id) {
          this.validationAlarm = true;
        }
      })
      if (this.validationAlarm) return;
    }
    this.apiService.makeOrder(email, this.tourId).subscribe(response => {
      if (response['tour_id'] === this.tourId) {
        console.log(this.tourId);
        this.success = true;
      }
    });
  }
}
