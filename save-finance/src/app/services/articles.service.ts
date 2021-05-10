import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticlesResponse } from 'src/types/ArticlesResponse';

export interface Articles {
  url: string;
  title: string;
}

export interface ArticlesApi {
  result: Array<Articles>;
}

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articles$: ReplaySubject<ArticlesResponse>;

  constructor() {
    this.articles$ = new ReplaySubject();
  }

  getArticles$(): Observable<Articles[]> {
    return this.articles$.asObservable().pipe(
      map((response) => {
        const result = response.result.slice(0, 5).map((value) => {
          return { url: value.url, title: value.title };
        });
        return result;
      })
    );
  }

  getCurrentArticlesApi(): void {
    const url = `https://api.vc.ru/v1.9/timeline/finance/recent`;
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
      .subscribe((response) => this.articles$.next(response));
  }
}
