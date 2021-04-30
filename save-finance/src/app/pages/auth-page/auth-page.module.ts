import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthPageComponent } from './auth-page.component';
import AuthPageRoutingModule from './auth-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/components/core.module';

@NgModule({
  imports: [CommonModule, AuthPageRoutingModule, FormsModule, SharedModule, CoreModule],
  exports: [],
  declarations: [AuthPageComponent],
})
export class AuthPageModule {}