import { Component } from '@angular/core';
import IUser from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  user: IUser;

  constructor(private UserService: UserService) {
    this.user = { login: '', password: '' };
  }

  onSubmit() {
    this.UserService.logIn(this.user.login, this.user.password);
  }
}
