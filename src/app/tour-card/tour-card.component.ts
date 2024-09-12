import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TOURS } from '../tours';
import { Country } from '../country';
import { City } from '../city';
import { Hotel } from '../hotel';
// import { HOTELS } from '../hotels';
// import { CITIES } from '../cities';
// import { COUNTRIES } from '../countries';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent {
  @Input() tourId: number | undefined = 0;

  tour: Tour = {
    id: 0,
    name: '',
    description: '',
    id_country: 0,
    id_city: 0,
    id_hotel: 0,
    count_persons: 0,
    transport: '',
    price: 0,
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

  constructor(private apiService: ApiService) { }

  async ngOnInit(){
    this.tour = (await this.apiService.getTours()).find(t => t.id === this.tourId)!;
    this.city = (await this.apiService.getCities()).find(c => c.id === this.tour.id_city) || this.city;
    this.country = (await this.apiService.getCountries()).find(c => c.id === this.city.id_country) || this.country;
    this.hotel = (await this.apiService.getHotels()).find(h => h.id === this.tour.id_hotel) || this.hotel;
  }

}
