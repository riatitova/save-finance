import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamKey, QueryParamKey } from './app-routing.enum';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: ParamKey.main, component: MainPageComponent, pathMatch: 'full' },
  { path: ParamKey.main, component: MainPageComponent },
  {
    path: ParamKey.login,
    loadChildren: () =>
      import('./pages/auth-page/auth-page.module').then((module) => module.AuthPageModule),
  },
  {
    path: ParamKey.registration,
    loadChildren: () =>
      import('./pages/registration-page/registration-page.module').then((module) => module.RegistrationPageModule),
  },
  {
    path: ParamKey.main,
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then((module) => module.MainPageModule),
  },
  {
    path: ParamKey.income,
    loadChildren: () =>
      import('./pages/income-page/income-page.module').then((module) => module.IncomePageModule),
  },
  {
    path: ParamKey.expense,
    loadChildren: () =>
      import('./pages/expense-page/expense-page.module').then((module) => module.ExpensePageModule),
  },
  { path: ParamKey.notFound, redirectTo: QueryParamKey.redirectTo },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
