import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

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
  temperature: string;
  humidity: string;
  wind: string;
  weatherDescription: string;
  weatherSearchForm: FormGroup;

  constructor(private WeatherService: WeatherService,  private formBuilder: FormBuilder) {
    this.weatherSearchForm = this.formBuilder.group({
      city: [""]
    });
    this.city = 'Enter city';
    this.temperature = '';
    this.humidity = '';
    this.wind = '';
    this.weatherDescription = '';
  }

  getWeather(formValue: IFormValue): void {
      this.WeatherService.getWeatherApi(formValue.city).subscribe((data) => {
        if (data.cod === 404) {
          this.city = '[Enter city]';
        } else {
          this.city = formValue.city;
          this.temperature = `temperature: ${data.main.temp}°C`;
          this.humidity = `humidity: ${data.main.humidity}%`;
          this.wind = `wind: ${data.wind.speed} m/sec`;
          this.weatherDescription = data.weather[0].description;
        }
      });
  }
}
