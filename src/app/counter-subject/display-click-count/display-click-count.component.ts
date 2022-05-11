import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedData } from '../model/SharedData';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-display-click-count',
  templateUrl: './display-click-count.component.html',
  styleUrls: ['./display-click-count.component.css']
})
export class DisplayClickCountComponent implements OnDestroy {
  public pausedCount: number = 0;
  public startCount: number = 0;
  
  private clickCountSubscription!: Subscription;

  constructor(private _counterService: CounterService) {
   this.clickCountSubscription = this._counterService.getCounterData().subscribe((sharedData:SharedData) => {
      this.pausedCount = sharedData.pausedCount;
      this.startCount = sharedData.startCount;
    });
  }
  
 public ngOnDestroy(): void {
    this.clickCountSubscription.unsubscribe();
  }
}

