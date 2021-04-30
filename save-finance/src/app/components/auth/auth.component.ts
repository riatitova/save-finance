import { Component } from '@angular/core';
import IUser from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  user: IUser;

  constructor(private AuthService: AuthService) {
    this.user = { login: '', password: '' };
  }

  onSubmit() {
    this.AuthService.logIn(this.user.login, this.user.password);
  }
}
