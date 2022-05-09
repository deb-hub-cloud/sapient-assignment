import { NgModule } from '@angular/core';

import { CounterInputOutputRoutingModule } from './counter-input-output-routing.module';
import { CounterComponent } from './counter/counter.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';
import { DisplayTimestampComponent } from './display-timestamp/display-timestamp.component';
import { DisplayClickCountComponent } from './display-click-count/display-click-count.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent,
    DisplayCounterComponent,
    DisplayTimestampComponent,
    DisplayClickCountComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CounterInputOutputRoutingModule
  ]
})
export class CounterInputOutputModule { }
