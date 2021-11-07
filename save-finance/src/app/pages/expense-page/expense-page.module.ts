import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ExpensePageRoutingModule from './expense-page-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/components/core.module';
import { ExpensePageComponent } from './expense-page.component';



@NgModule({
  declarations: [ExpensePageComponent],
  imports: [
    CommonModule, ExpensePageRoutingModule, FormsModule, SharedModule, CoreModule
  ]
})
export class ExpensePageModule { }
