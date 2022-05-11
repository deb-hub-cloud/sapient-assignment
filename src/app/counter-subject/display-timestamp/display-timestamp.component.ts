import { Component, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedData } from '../model/SharedData';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-display-timestamp',
  templateUrl: './display-timestamp.component.html',
  styleUrls: ['./display-timestamp.component.css']
})
export class DisplayTimestampComponent implements OnDestroy {
  public actionTimes: string[] = [];

  private timeStampSubscription!: Subscription;
  
  constructor(private _counterService: CounterService) {
    this.timeStampSubscription = this._counterService.getCounterData().subscribe((sharedData: SharedData) => {
      this.actionTimes = sharedData.actionTimes;
    });
  }
  
  public ngOnDestroy(): void {
    this.timeStampSubscription.unsubscribe();
  }
}
