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

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    NavigationComponent,
    LoginButtonComponent,
    InfoComponent,
    WeatherComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule, ReactiveFormsModule],
  exports: [
    AuthComponent,
    HeaderComponent,
    NavigationComponent,
    LoginButtonComponent,
    InfoComponent,
    WeatherComponent
  ],
})
export class CoreModule {}
