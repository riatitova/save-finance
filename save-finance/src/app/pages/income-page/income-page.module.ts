import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomePageComponent } from './income-page.component';
import IncomePageRoutingModule from './income-page-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/components/core.module';



@NgModule({
  declarations: [IncomePageComponent],
  imports: [
    CommonModule, IncomePageRoutingModule, FormsModule, SharedModule, CoreModule
  ]
})
export class IncomePageModule { }
