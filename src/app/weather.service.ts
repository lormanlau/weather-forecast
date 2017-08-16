import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/operator/toPromise.js';

const APIKEY = '2627c05249daa07e0df85b071f55e8c4';
const APIID = "&APPID="

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(location){
  	return this._http.get('https://api.openweathermap.org/data/2.5/weather?q='+ location + APIID + APIKEY)
  	.map(data => 
  		{ return data.json()}
  	)
  	.toPromise();
  }
}
