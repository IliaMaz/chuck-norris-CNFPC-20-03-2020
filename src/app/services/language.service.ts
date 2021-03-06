import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  secret = "secret_key=0d1227d3c54c395bcc7bf80a5927fde9"
  //5000calls/day

  baseUrl = "https://languagelayer.com/php_helper_scripts/language_api.php?" + this.secret

  constructor(private http: HttpClient) { }
  // https://languagelayer.com/php_helper_scripts/language_api.php?
  //secret_key=0d1227d3c54c395bcc7bf80a5927fde9
  // &query=Hello

  getPossiblesLanguages(sentence: string) {
    return this.http.get(this.baseUrl + '&query=' + sentence);
  }
  postData(name) {
    const data = {
      roomName: name
    }
    return this.http.post('https://ajax-course.herokuapp.com/rooms', data);
  }
}
