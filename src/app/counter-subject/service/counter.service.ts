import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SharedData } from '../model/SharedData';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private sharingDataSource: Subject<SharedData> = new Subject<SharedData>();
  private currentTimeSource: Subject<number> = new Subject<number>();

  constructor() { }

  public sharedCounterData(data: SharedData) {
    this.sharingDataSource.next(data)
  }

  public sharedCurrenttime(time: number) {
    this.currentTimeSource.next(time)
  }

  public getCounterData(): Observable<SharedData> {
    return this.sharingDataSource.asObservable();
  }

  public getCurrentTime(): Observable<number> {
    return this.currentTimeSource.asObservable();
  }

}
