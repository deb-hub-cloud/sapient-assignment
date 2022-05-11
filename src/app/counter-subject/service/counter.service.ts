import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedData } from '../model/SharedData';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  SharingData: Subject<SharedData> = new Subject<SharedData>();
  CounterValue: Subject<number> = new Subject<number>();
  constructor() { }
}
