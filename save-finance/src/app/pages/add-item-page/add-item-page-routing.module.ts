import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemPageComponent } from './add-item-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddItemPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AddItemPageRoutingModule {}