import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

interface IState {
  login: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  state: IState;

  constructor(private DBService: DatabaseService) {
    this.state = {login: 'false'};
   }

  async logIn(login: string, password: string): Promise<void> {
    const isCorrectPassword = await this.DBService.checkPassword(login, password);
    if (isCorrectPassword) {
      this.state.login = 'true';
    }
    
  }
}
