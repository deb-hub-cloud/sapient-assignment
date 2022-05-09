import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TimerModel } from '../model/timerModel';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  public counterForm:FormGroup;
  
  public timerObj:TimerModel = new TimerModel(0,'');
  public pausedValues:number[] = [];
  public pausedCount:number = 0;
  public startCount:number = 0;
  public actionTimes:string [] = [];

  private action:string = '';
  
  constructor() { 
    this.counterForm = new FormGroup({
      'timeLimit': new FormControl(null,[Validators.min(1), Validators.pattern('^(0|[1-9][0-9]*)$')])
    })
  }

  public startPauseTimer():void{
    if(this.action || this.counterForm.get('timeLimit')?.value){

      if(this.counterForm.get('timeLimit')?.value){
        this.actionTimes = [];
        this.resetAllCounterCounts();
      }
      
      this.action = (this.action === '' ? 'start': this.action === 'start' ? 'pause' : 'start');
      this.timerObj = new TimerModel(this.counterForm.get('timeLimit')?.value,this.action);
      
      switch(this.action){
        case 'start' :
          this.startCount ++;
          let startedTime = `Started at ${moment().format("DD-MM-YYYY HH:mm:ss")}`;
          this.actionTimes.push(startedTime);
        break;

        case 'pause' :
          this.pausedCount ++
          let pausedTime = `Paused at ${moment().format("DD-MM-YYYY HH:mm:ss")}`;
          this.actionTimes.push(pausedTime);
        break;
      }
    
      this.counterForm.reset();
    }
  }

  public reset():void{
    if(this.startCount){
      let pausedTime = `Reset at ${moment().format("DD-MM-YYYY HH:mm:ss")}`;
      this.actionTimes.push(pausedTime);
      this.resetAllCounterCounts();
    }
  }

  private resetAllCounterCounts():void {
    this.startCount = 0;
    this.pausedCount = 0;
    this.pausedValues = [];
    this.action = '';
    this.timerObj = new TimerModel(this.counterForm.get('timeLimit')?.value,this.action)
  }

  public getPausedValue(time:any):void {
    this.pausedValues.push(time);
  }

  get controls() :{ [key: string]: AbstractControl }{ 
    return this.counterForm.controls; 
  }
 
}
