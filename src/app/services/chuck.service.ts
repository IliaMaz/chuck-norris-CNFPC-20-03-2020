import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ChuckService {

  constructor(private http: HttpClient) { }
  getJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random'); // it's a promise... susbsribe
  }

  getCategories() {
    return this.http.get('https://api.chucknorris.io/jokes/categories');
  }

  getJokeFromCategory(providedCategory: string) {
    return this.http.get('https://api.chucknorris.io/jokes/random?category=' + providedCategory);
  }

}

