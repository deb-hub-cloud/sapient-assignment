import { NgModule } from '@angular/core';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './list/shopping-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    ShoppingListRoutingModule,
    SharedModule
  ]
})
export class ShoppingListModule { }
