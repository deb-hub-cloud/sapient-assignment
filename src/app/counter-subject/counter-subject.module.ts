import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CounterSubjectRoutingModule } from './counter-subject-routing.module';
import { CounterComponent } from './counter/counter.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';
import { DisplayTimestampComponent } from './display-timestamp/display-timestamp.component';
import { DisplayClickCountComponent } from './display-click-count/display-click-count.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CounterComponent,
    DisplayCounterComponent,
    DisplayTimestampComponent,
    DisplayClickCountComponent
  ],
  imports: [
    SharedModule,
    CounterSubjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class CounterSubjectModule { }
