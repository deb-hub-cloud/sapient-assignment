import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { SharedData } from '../model/SharedData';
import { CounterService } from "../service/counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnDestroy,OnInit {
  public counterForm:FormGroup;
  private counterSubscription!: Subscription;

  public pausedValues:number[] = [];
  private action:string = '';
  private pausedCount:number = 0;
  private startCount:number = 0;
  private actionTimes:string [] = [];
  
  constructor(private _counterService: CounterService) { 
    this.counterForm = new FormGroup({
      'timeLimit': new FormControl(null,[Validators.min(1), Validators.pattern('^(0|[1-9][0-9]*)$')])
    })
  }

  public ngOnInit(): void {
   this.counterSubscription = this._counterService.CounterValue.subscribe((time:number) => {      
      if(time != 0){
        this.pausedValues.push(time);
      }else{
        this.action = ''; 
        this.resetAllCounterCounts();
      }
    });
  }

  public reset(): void {
    if(this.startCount){
      let pausedTime = `Reset at ${moment().format("DD-MM-YYYY HH:mm:ss")}`;
      this.actionTimes.push(pausedTime);
      this.sharedData(new SharedData('',0,0,0,this.actionTimes));
      this.pausedValues = [];
      this.resetAllCounterCounts();
    }
  }

  public startPauseTimer(): void {
    if(this.action !== '' || this.counterForm.get('timeLimit')?.value){
      if(this.counterForm.get('timeLimit')?.value){
        this.pausedValues = [];
        this.resetAllCounterCounts();
      }
      
      this.action = (this.action === '' ? 'start': this.action === 'start' ? 'pause' : 'start');

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
      
      this.sharedData(new SharedData(this.action,this.counterForm.get('timeLimit')?.value,
                      this.startCount,this.pausedCount,this.actionTimes));
      this.counterForm.reset();
    }
  }

  private resetAllCounterCounts():void {
    this.action = '';
    this.startCount = 0;
    this.pausedCount = 0;
    this.actionTimes = [];
  }

  private sharedData(sharedData:SharedData): void {
    this._counterService.SharingData.next(sharedData);
  }
  
  get controls() :{ [key: string]: AbstractControl }{ 
    return this.counterForm.controls; 
  }

  public ngOnDestroy(): void {
   this.counterSubscription.unsubscribe();
  }

}
