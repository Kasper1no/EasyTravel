import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Tour } from './tour';
import { Hotel } from './hotel';
import { City } from './city';
import { Country } from './country';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private async fetchWithRetry(url: string, options: RequestInit = {}, retries: number = 10, delay: number = 3000): Promise<Response> {
    for (let i = 0; i < retries; i++) {
      const response = await fetch(url, options);
      if (response.status !== 429) {
        return response;
      }
      console.warn(`Retrying... Attempt ${i + 1} of ${retries}`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    throw new Error("Too many requests");
  }

  async getTours(): Promise<Tour[]> {
    const storedTours = sessionStorage.getItem('tours');
    if (storedTours) {
        return JSON.parse(storedTours);
    }

    const response = await this.fetchWithRetry(this.apiUrl + '/tours');
    const data = await response.json();
    const tours: Tour[] = [];
    
    data.forEach((item: any) => {
        tours.push(Tour.mapTour(item));
    });

    sessionStorage.setItem('tours', JSON.stringify(tours));
    
    return tours;
}


  async getTour(id: number): Promise<Tour> {
    const storedTours = sessionStorage.getItem('tours');
    if(storedTours){
      return JSON.parse(storedTours[id]);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/tours/' + id);
    const data = await response.json();
    return Tour.mapTour(data);
  }

  async getHotels(): Promise<Hotel[]> {
    const storedHotels = sessionStorage.getItem('hotels');
    if (storedHotels) {
        return JSON.parse(storedHotels);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/hotels');
    const data = await response.json();
    const hotels: Hotel[] = [];
    data.forEach((item: any) => {
      hotels.push(Hotel.mapHotel(item));
    });

    sessionStorage.setItem('hotels', JSON.stringify(hotels));
    return hotels;
  }

  async getHotel(id: number): Promise<Hotel> {
    const storedHotels = sessionStorage.getItem('hotels');
    if(storedHotels){
      return JSON.parse(storedHotels[id]);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/hotels/' + id);
    const data = await response.json();
    return Hotel.mapHotel(data);
  }

  async getCities(): Promise<City[]> {
    const storedCities = sessionStorage.getItem('cities');
    if (storedCities) {
        return JSON.parse(storedCities);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/cities');
    const data = await response.json();
    const cities: City[] = [];
    data.forEach((item: any) => {
      cities.push(City.mapCity(item));
    });

    sessionStorage.setItem('cities', JSON.stringify(cities));
    return cities;
  }

  async getCity(id: number): Promise<City> {
    const storedCities = sessionStorage.getItem('cities');
    if(storedCities){
      return JSON.parse(storedCities[id]);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/cities/' + id);
    const data = await response.json();
    return City.mapCity(data);
  }

  async getCountries(): Promise<Country[]> {
    const storedCountries = sessionStorage.getItem('countries');
    if (storedCountries) {
        return JSON.parse(storedCountries);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/countries');
    const data = await response.json();
    const countries: Country[] = [];
    data.forEach((item: any) => {
      countries.push(Country.mapCountry(item));
    });

    sessionStorage.setItem('countries', JSON.stringify(countries));
    return countries;
  }

  async getCountry(id: number): Promise<Country> {
    const storedCountries = sessionStorage.getItem('countries');
    if(storedCountries){
      return JSON.parse(storedCountries[id]);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/countries/' + id);
    const data = await response.json();
    return Country.mapCountry(data);
  }

  async getOrders(): Promise<Order[]> {
    const storedOrders = sessionStorage.getItem('orders');
    if (storedOrders) {
        return JSON.parse(storedOrders);
    }
    const response = await this.fetchWithRetry(this.apiUrl + '/orders');
    const data = await response.json();
    const orders: Order[] = [];
    data.forEach((item: any) => {
      orders.push(Order.mapOrder(item));
    });
    return orders;
  }

  makeOrder(email: string, tourId: number): Observable<any> {
    const body = { email: email, tour_id: tourId };
    const url = `${this.apiUrl}/orders`;
    return this.http.post<any>(url, body);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}