import { NgModule } from '@angular/core';

import { StudentTableRoutingModule } from './student-table-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    SharedModule,
    StudentTableRoutingModule
  ]
})
export class StudentTableModule { }
