import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clickLogin: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  logIn(password: string, email: string): void {
    
  }
}
