import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LogoComponent,
  ],
})
export class SharedModule {}
