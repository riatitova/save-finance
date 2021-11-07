import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Articles, ArticlesService} from '../../services/articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  constructor(private ArticlesService: ArticlesService) {
    this.getCurrentArticlesApi();
  }

  getArticlesData$(): Observable<Articles[]> {
    return this.ArticlesService.getArticles$();
  }

  getCurrentArticlesApi(): void {
    this.ArticlesService.getCurrentArticlesApi();
  }

}
