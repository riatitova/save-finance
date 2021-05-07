import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomePageComponent } from './income-page.component';

const routes: Routes = [
  {
    path: '',
    component: IncomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class IncomePageRoutingModule {}