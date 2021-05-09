import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensePageComponent } from './expense-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class ExpensePageRoutingModule {}