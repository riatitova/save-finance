import { ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
  @Output() 
  clickAutnButton = new EventEmitter<boolean>();

  constructor(private DBService: DatabaseService) {
    this.DBService.checkUser('Mary');
  }

  ngOnInit(): void {}
}
