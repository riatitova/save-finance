import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    NavigationComponent,
    LoginButtonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  exports: [
    AuthComponent,
    HeaderComponent,
    NavigationComponent,
    LoginButtonComponent,
  ],
})
export class CoreModule {}
