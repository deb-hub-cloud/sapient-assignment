import { NgModule } from '@angular/core';


import { FloatingBannerRoutingModule } from './floating-banner-routing.module';
import { FloatingBannerComponent } from './banner/floating-banner.component';


@NgModule({
  declarations: [
    FloatingBannerComponent
  ],
  imports: [
    FloatingBannerRoutingModule
  ]
})
export class FloatingBannerModule { }
