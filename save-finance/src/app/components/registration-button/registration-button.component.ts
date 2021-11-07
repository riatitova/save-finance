import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registration-button',
  templateUrl: './registration-button.component.html',
  styleUrls: ['./registration-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationButtonComponent {}
