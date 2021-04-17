import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import {ContentBorderComponent} from './components/content-border/content-border.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [ButtonComponent, ContentBorderComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ContentBorderComponent,
    LogoComponent
  ]
})
export class SharedModule { }
