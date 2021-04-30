import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamKey, QueryParamKey } from './app-routing.enum';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: ParamKey.main, component: MainPageComponent, pathMatch: 'full' },
  { path: ParamKey.main, component: MainPageComponent },
  {
    path: ParamKey.login,
    loadChildren: (): any =>
      import('./pages/auth-page/auth-page.module').then((module) => module.AuthPageModule),
  },
  {
    path: ParamKey.main,
    loadChildren: (): any =>
      import('./pages/main-page/main-page.module').then((module) => module.MainPageModule),
  },
  { path: ParamKey.notFound, redirectTo: QueryParamKey.redirectTo },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
