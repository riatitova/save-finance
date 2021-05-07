import { ChangeDetectionStrategy, Component } from '@angular/core';
import IUser from 'src/app/models/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  user: IUser;
  registrationForm: FormGroup;

  constructor(
    private UserService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.user = { login: '', email: '', password: '' };
    this.registrationForm = this.formBuilder.group({});
    this.initForm();
  }

  onSubmit() {
    this.user = { ...this.registrationForm.value };
    this.UserService.register(
      this.user.login,
      this.user.email,
      this.user.password
    );
  }

  initForm(): void {
    this.registrationForm = this.formBuilder.group({
      login: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z]*$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
        ],
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.registrationForm.controls[controlName];

    return control.invalid && control.touched;
  }
}
