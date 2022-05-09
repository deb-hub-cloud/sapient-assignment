import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatingBannerComponent } from './banner/floating-banner.component';

const routes: Routes = [
  { 
    path:'', 
    component: FloatingBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingBannerRoutingModule { }
