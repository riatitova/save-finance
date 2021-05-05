import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, switchMap } from 'rxjs/operators';
import { WeatherResponse } from '../../types/WeatherResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  getWeatherApi(city: string): Observable<WeatherResponse> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=5ee1d8fbc64f743ff0e4d3a176a515c2&units=metric`;
    const response$ = fromFetch(url).pipe(
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
    );
    return response$;
  }
}
