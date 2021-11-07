import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutButtonComponent {
  constructor(private UserService: UserService) {
   
  }

  logout(): void {
    this.UserService.logOut();
  }
}
