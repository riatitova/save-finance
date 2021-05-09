import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Weather, WeatherService } from 'src/app/services/weather.service';
import { WeatherResponse } from 'src/types/WeatherResponse';

interface IFormValue {
  city: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  city: string;
  weatherSearchForm: FormGroup;

  constructor(private WeatherService: WeatherService,  private formBuilder: FormBuilder) {
    this.weatherSearchForm = this.formBuilder.group({
      city: [""]
    });
    this.city = 'Enter city';
  }

  getWeatherData$(): Observable<Weather> {
    return this.WeatherService.getWeather$();
  }

  updateWeatherData(formValue: IFormValue): void {
    this.WeatherService.setCurrentCity(formValue.city);
  }
}
