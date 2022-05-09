import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { TimerModel } from '../model/timerModel';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent {
  public timer:number = 0;
  private interval:any;
 
  @Input() set timerObj(value: TimerModel) {
    if(value.timeLimit !=null){
      if(this.interval){
        clearInterval(this.interval);
      }
      this.timer =  value.timeLimit;
    }
    this.startTimer(value.action)
  }
 
  @Output() pausedTimerValue = new EventEmitter();
  
  constructor() { }
  
  public startTimer(action:string): void{
    switch (action){
      case 'start' :
        this.interval = setInterval(() => {
          if (this.timer > 0) {
            this.timer--;
          } else{
            clearInterval(this.interval);
          }
        }, 1000);
      break;

      case 'pause' :
        this.pausedTimerValue.emit(this.timer)
        clearInterval(this.interval);
      break;
       
      default :
        this.timer = 0;
        clearInterval(this.interval);
      break;
    }
  }
 
}
