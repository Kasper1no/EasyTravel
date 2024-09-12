import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';
import { City } from '../city';
import { Hotel } from '../hotel';
import { Tour } from '../tour';
import { filter } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  additional_menu: boolean = false;
  selected_country_id: number = 0;
  selected_city_id: number = 0;
  selected_hotel_id: number = 0;
  available_countries: Country[] = [];
  available_cities: City[] = [];
  available_hotels: Hotel[] = [];
  id_time:number = 0;
  current_min_price: number =  0;
  current_max_price: number =  0;
  selected_transfer: string = '';
  selected_meal: string = '';

  filtered_tours: Tour[] = [];

  constructor( private route: ActivatedRoute, private apiService: ApiService) {}

  async ngOnInit() {
    let selected_category: string = '';
    this.route.queryParams.subscribe(params => {
      selected_category = params['category'] || '';
    });

    this.available_countries = await this.apiService.getCountries();
    this.available_cities = await this.apiService.getCities();
    this.available_hotels = await this.apiService.getHotels();
    this.filtered_tours = await this.apiService.getTours();

    this.current_min_price = await this.get_min_price();
    this.current_max_price = await this.get_max_price();

    if(selected_category != '') {
      this.available_countries.forEach(element => {
        if(element.name == selected_category) {
          this.selected_country_id = element.id;
          this.selected_city_id = 0;
          this.selected_hotel_id = 0;
          this.filter_cities();
          this.filter_hotels();
          this.filter_tours();
        }
      });
    }
  }
  
  choose_country(event: any) {
    if(event.target.value == null) {
      return;
    }
    let id: number = event.target.value;
    
      this.selected_country_id = id;
      this.selected_city_id = 0;
      this.selected_hotel_id = 0;
      this.filter_cities();
      this.filter_hotels();
      this.filter_tours();
  }

  async choose_city(event: any) {
    if(event.target.value == null) {
      return;
    }
    let id: number  = event.target.value;
    if(id == 0) { 
      this.selected_city_id = 0;
      this.selected_hotel_id = 0;
    }
    else {
      if (this.selected_country_id == 0 || this.selected_country_id != (await this.apiService.getCities()).find(ci => ci.id == id)!.id_country) {

        this.selected_country_id = (await this.apiService.getCities()).find(ci => ci.id == id)!.id_country;
      }
      this.selected_city_id = id;
    }
    this.filter_cities();
    this.filter_hotels();
    this.filter_tours();
  }

  async choose_hotel(event: any) {
    if(event.target.value == null) {
      return;
    }
    let id: number = event.target.value;
    this.selected_hotel_id = id;
    if(this.selected_city_id == 0 || this.selected_city_id != (await this.apiService.getHotels()).find(h => h.id == id)!.id_city) {
      this.selected_city_id = (await this.apiService.getHotels()).find(h => h.id == id)!.id_city;
    }
    if(this.selected_country_id == 0 || this.selected_country_id != (await this.apiService.getCities()).find(ci => ci.id == this.selected_city_id)!.id_country) {
      this.selected_country_id = (await this.apiService.getCities()).find(ci => ci.id == this.selected_city_id)!.id_country;
    }
    this.filter_cities();
    this.filter_hotels();
    this.filter_tours();
  }

  choose_date(event: any) {
    if (event.target.selectedIndex == null) {
      return;
    }
    let id: number = event.target.selectedIndex;
    console.log(id);
    this.id_time = id;
    this.filter_tours();
  }


  async filter_cities(){
    this.available_cities = (await this.apiService.getCities());
    if(this.selected_country_id != 0) {
      this.available_cities = (await this.apiService.getCities()).filter(c => c.id_country == this.selected_country_id);
    }
  }

  async filter_hotels(){
    this.available_hotels = (await this.apiService.getHotels());
    if(this.selected_country_id != 0) {
      this.available_hotels = this.available_hotels.filter(h => h.id_country == this.selected_country_id);
    }
    if(this.selected_city_id != 0) {
      this.available_hotels = this.available_hotels.filter(async h => (await this.apiService.getCities()).find(ci => ci.id == this.selected_city_id)!.id == h.id_city);
    }
  }

  async get_min_price():Promise<number>{
    return Math.min.apply(Math, (await this.filtered_tours).map(t => t.price));
  }
  async get_max_price():Promise<number>{
    return Math.max.apply(Math, (await this.filtered_tours).map(t => t.price));
  }

  slider_min_price(event: any) {
    // console.log(event.target);
    this.current_min_price = event.target.value;
    this.filter_tours();
  }

  slider_max_price(event: any) {
    // console.log(event.target);
    this.current_max_price = event.target.value;
    this.filter_tours();
  }

  choose_meal(event: any) {
    this.selected_meal = (event.target as HTMLInputElement).value;
    // console.log(this.selected_meal);
    this.filter_tours();
  }

  choose_transfer(event: any) {
    this.selected_transfer = (event.target as HTMLInputElement).value;
    // console.log(this.selected_transfer);
    this.filter_tours();
  }

  async clear(){
    this.current_min_price = await this.get_min_price();
    this.current_max_price = await this.get_max_price();
    this.selected_meal = '';
    this.selected_transfer = '';
    document.getElementsByName("transfer").forEach(e => (e as HTMLInputElement).checked = false);
    document.getElementsByName("meal").forEach(e => (e as HTMLInputElement).checked = false);
  }

  async filter_tours(){
    this.filtered_tours = (await this.apiService.getTours());
    if(this.selected_country_id != 0) {
      this.filtered_tours = this.filtered_tours.filter(t => t.id_country == this.selected_country_id);
    }
    if (this.selected_city_id != 0) {
      this.filtered_tours = this.filtered_tours.filter(t => t.id_city == this.selected_city_id);
    }
    if (this.selected_hotel_id != 0) {
      this.filtered_tours = this.filtered_tours.filter(t => t.id_hotel == this.selected_hotel_id);
    }
    if(this.id_time != 0){
      switch (this.id_time) {
        case 1:
          this.filtered_tours = this.filtered_tours.filter(t => (new Date(t.time_to).getTime() - new Date(t.time_from).getTime()) / (1000 * 60 * 60 * 24) <= 7);
          break;
        case 2:
          this.filtered_tours = this.filtered_tours.filter(t => (new Date(t.time_to).getTime() - new Date(t.time_from).getTime()) / (1000 * 60 * 60 * 24) > 7 && (new Date(t.time_to).getTime() - new Date(t.time_from).getTime()) / (1000 * 60 * 60 * 24) <= 14);
          break;
        case 3:
          this.filtered_tours = this.filtered_tours.filter(t => (new Date(t.time_to).getTime() - new Date(t.time_from).getTime()) / (1000 * 60 * 60 * 24) > 14 && (new Date(t.time_to).getTime() - new Date(t.time_from).getTime()) / (1000 * 60 * 60 * 24) <= 21);
          break;
        case 4:
          this.filtered_tours = this.filtered_tours.filter(t => (new Date(t.time_to).getTime() - new Date(t.time_from).getTime()) / (1000 * 60 * 60 * 24) > 21);
          break;
      }
    }
    if(this.selected_meal != '') {
      this.filtered_tours = this.filtered_tours.filter(async t => (await this.apiService.getHotels()).find(h => h.id == t.id_hotel)!.meal_desc == this.selected_meal);
    }
    if(this.selected_transfer != '') {
      this.filtered_tours = this.filtered_tours.filter(t => t.transport == this.selected_transfer);
    }
    console.log(this.filtered_tours);
    console.log(this.current_min_price + " " + this.current_max_price);
    this.filtered_tours = this.filtered_tours.filter(t => t.price >= this.current_min_price && t.price <= this.current_max_price);
    
  console.log(this.filtered_tours);
  }
}
