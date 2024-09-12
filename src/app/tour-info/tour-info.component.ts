import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../tour';
import { Country } from '../country';
import { City } from '../city';
import { Hotel } from '../hotel';
import { CITIES } from '../cities';
import { COUNTRIES } from '../countries';
import { HOTELS } from '../hotels';
import {ApiService} from "../api.service";

import { ModalOrderComponent } from '../modal-order/modal-order.component';

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.css']
})
export class TourInfoComponent {
  tour: Tour = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    id_country: 0,
    id_city: 0,
    id_hotel: 0,
    count_persons: 0,
    transport: '',
    time_from: '',
    time_to: '',
    features: {},
    img: '',
    hotel_images: []
  };
  city: City = {
    id: 0,
    name: '',
    id_country: 0};
  country: Country = {
    id: 0,
    name: ''
  };
  hotel: Hotel = {
    id: 0,
    name: '',
    id_city: 0,
    id_country: 0,
    description: '',
    room_desc: '',
    meal_desc: '',
    location_desc: '',
    beach_desc: '',
    address: '',
    phone: '',
    email: '',
    features: [],
    rooms_desc: '',
    free_count: 0
  };

  @ViewChild('modal') modal!: ModalOrderComponent;

  ngAfterViewInit() {
    const btnBuy = document.getElementById("btn_buy");
    if (btnBuy) {
      btnBuy.addEventListener("click", () => this.modal.openModal());
    }
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  async ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')!;
    await this.getTour();
  }

  async getTour() {
    let id = +this.route.snapshot.paramMap.get('id')!;
    this.tour = await this.apiService.getTour(id);

    // this.tour = TOURS.find(t => t.id === id) || this.tour;
    
    // console.log("Tour-> "+ id +this.tour);
    this.city = CITIES.find(c => c.id === this.tour.id_city) || this.city;
    this.country = COUNTRIES.find(c => c.id === this.city.id_country) || this.country;
    this.hotel = HOTELS.find(h => h.id === this.tour.id_hotel) || this.hotel;
  }

  activeTab = 'tour';

  activateTab(tab: string) {
    this.activeTab = tab;
  }

  getFeatureKeys(features: Record<string, boolean>): string[] {
    return Object.keys(features);
  }

  getFeatureImage(key: string): string {
    if (this.tour.features[key]) {
      return '../../assets/ui/icons/icons8-plus-96.png';
    } else {
      return '../../assets/ui/icons/icons8-minus-96.png';
    }
  }
}
