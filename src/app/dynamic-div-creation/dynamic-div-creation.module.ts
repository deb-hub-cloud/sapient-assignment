import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; 

import { DynamicDivCreationRoutingModule } from './dynamic-div-creation-routing.module';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InfinityScrollComponent
  ],
  imports: [
    SharedModule,
    InfiniteScrollModule,
    DynamicDivCreationRoutingModule
  ]
})
export class DynamicDivCreationModule { }
