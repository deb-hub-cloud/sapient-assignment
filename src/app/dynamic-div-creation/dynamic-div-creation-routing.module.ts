import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';

const routes: Routes = [
    { 
    path:'', 
    component: InfinityScrollComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivCreationRoutingModule { }
