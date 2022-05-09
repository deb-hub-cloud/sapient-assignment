import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-display-click-count',
  templateUrl: './display-click-count.component.html',
  styleUrls: ['./display-click-count.component.css']
})
export class DisplayClickCountComponent {
  @Input()
  public pausedCount!:number;
  @Input()
  public startCount!:number;

  constructor() { }
  
}
