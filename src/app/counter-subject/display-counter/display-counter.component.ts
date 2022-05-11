import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedData } from '../model/SharedData';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent implements OnDestroy {
  
  public timer: number = 0;
  private interval: any;
  private displayCountSubscription!: Subscription;
  
  constructor(private _counterService: CounterService) {
   this.displayCountSubscription =  this._counterService.getCounterData().subscribe((sharedData:SharedData) => {
      if(sharedData.time != null){
        clearInterval(this.interval);
        this.timer = sharedData.time;
      }
      this.startTimer(sharedData.action);
    });
  }

  private startTimer(currentValue: string): void {
    switch (currentValue){
      case 'start' :
        this.interval = setInterval(() => {
          if (this.timer > 0) {
            this.timer--;
          } else {
            clearInterval(this.interval);
            this._counterService.sharedCurrenttime(this.timer);
          }
        }, 1000);
      break;

      case 'pause' :
        clearInterval(this.interval);
        this._counterService.sharedCurrenttime(this.timer);
      break;
    }
  }

  public ngOnDestroy(): void {
    this.displayCountSubscription.unsubscribe();
  }

}
