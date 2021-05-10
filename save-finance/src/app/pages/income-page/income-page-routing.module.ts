import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ParamKey } from 'src/app/app-routing.enum';
import { IncomePageComponent } from './income-page.component';

const routes: Routes = [
  {
    path: '',
    component: IncomePageComponent,
  },
  {
    path: ParamKey.item,
    loadChildren: () =>
      import('../add-item-page/add-item-page.module').then((module) => module.AddItemPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class IncomePageRoutingModule {}