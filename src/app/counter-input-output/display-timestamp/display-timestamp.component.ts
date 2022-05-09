import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-timestamp',
  templateUrl: './display-timestamp.component.html',
  styleUrls: ['./display-timestamp.component.css']
})
export class DisplayTimestampComponent  {
  @Input()
  public actionTimes!:string[];
  constructor() { }
}
