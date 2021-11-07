import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  catchError,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { WeatherResponse } from '../../types/WeatherResponse';

export interface Weather {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  weatherDescription: string;
}
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weather$: ReplaySubject<WeatherResponse>;

  constructor() {
    this.weather$ = new ReplaySubject();
  }

  getWeather$(): Observable<Weather> {
    return this.weather$.asObservable().pipe(
      map((response) => {
        const weather = {
          city: response.name,
          temperature: response.main.temp,
          humidity: response.main.humidity,
          wind: response.wind.speed,
          weatherDescription: response.weather[0].description,
        };
        return weather;
      })
    );
  }

  setCurrentCity(city: string): void {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=5ee1d8fbc64f743ff0e4d3a176a515c2&units=metric`;
    fromFetch(url)
      .pipe(
        switchMap((response) => {
          if (response.ok) {
            return response.json();
          }
          return of({ error: true, message: `Error ${response.status}` });
        }),
        catchError((err) => {
          console.error(err);
          return of({ error: true, message: err.message });
        })
      )
      .subscribe((response) => this.weather$.next(response));
  }
}
