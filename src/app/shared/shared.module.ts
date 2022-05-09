import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { SortDirective } from './directive/sort.directive'
import { DialogComponent } from './dialog/dialog/dialog.component';
import { HeaderComponent } from './header/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  declarations: [PriceFilterPipe,SortDirective,DialogComponent, HeaderComponent],
  exports: [PriceFilterPipe,FormsModule,CommonModule,SortDirective,DialogComponent,HeaderComponent]
})
export class SharedModule { }