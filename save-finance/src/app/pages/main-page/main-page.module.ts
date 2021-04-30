import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPageComponent } from './main-page.component';
import MainPageRoutingModule from './main-page-routing.module';
import { CoreModule } from 'src/app/components/core.module';

@NgModule({
  imports: [CommonModule, MainPageRoutingModule, FormsModule, SharedModule, CoreModule],
  exports: [],
  declarations: [MainPageComponent],
})
export class MainPageModule {}