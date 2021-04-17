import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import {ContentBorderComponent} from './components/content-border/content-border.component';

@NgModule({
  declarations: [ButtonComponent, ContentBorderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ContentBorderComponent
  ]
})
export class SharedModule { }
