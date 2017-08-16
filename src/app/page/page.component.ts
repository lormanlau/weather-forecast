import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { WeatherService } from './../weather.service';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  locationData = null;
  constructor(private _weatherService: WeatherService, private _route: ActivatedRoute) {
  	this._route.paramMap
  	.switchMap(params => {
  		if (params.get('location') == null){
  			return this._weatherService.getWeather("San Jose");
  		} else {
  			return this._weatherService.getWeather(params.get("location"));
  		}
  	})
  	.subscribe(data => {
      console.log(data);
  		this.locationData = data;
  	});
  }

  ngOnInit() {
  }

}
