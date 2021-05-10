import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { WeatherComponent } from './weather/weather.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationButtonComponent } from './registration-button/registration-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    NavigationComponent,
    LoginButtonComponent,
    InfoComponent,
    WeatherComponent,
    RegistrationComponent,
    RegistrationButtonComponent,
    LogoutButtonComponent,
    ArticlesComponent,
    AddItemComponent,
    AddButtonComponent,
    AccountsComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule, ReactiveFormsModule],
  exports: [
    AuthComponent,
    HeaderComponent,
    NavigationComponent,
    LoginButtonComponent,
    InfoComponent,
    WeatherComponent,
    RegistrationComponent,
    RegistrationButtonComponent,
    LogoutButtonComponent,
    ArticlesComponent,
    AddItemComponent,
    AddButtonComponent,
    AccountsComponent
  ],
})
export class CoreModule {}
