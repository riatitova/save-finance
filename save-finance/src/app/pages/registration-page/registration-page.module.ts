import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/components/core.module';
import RegistrationPageRoutingModule from './registration-page-routing.module';
import { RegistrationPageComponent } from './registration-page.component';



@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule, RegistrationPageRoutingModule, FormsModule, SharedModule, CoreModule
  ]
})
export class RegistrationPageModule { }
