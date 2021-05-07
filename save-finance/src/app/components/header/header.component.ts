import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(private UserService: UserService) {
  }

  isLogin(): boolean {
    return this.UserService.isLogin();
  }
}
