import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/components/core.module';
import AddItemPageRoutingModule from './add-item-page-routing.module';
import { AddItemPageComponent } from './add-item-page.component';

@NgModule({
  imports: [CommonModule, AddItemPageRoutingModule, FormsModule, SharedModule, CoreModule],
  exports: [],
  declarations: [AddItemPageComponent],
})
export class AddItemPageModule {}