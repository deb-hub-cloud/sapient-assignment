export class SharedData {
    action: string;
    time: number;
    startCount: number;
    pausedCount: number;
    actionTimes: string[]
    constructor(action:string,time:number,startCount:number,pausedCount:number,actiomTimes:string[]){
        this.action = action;
        this.time = time;
        this.startCount = startCount;
        this.pausedCount = pausedCount;
        this.actionTimes = actiomTimes;
    }
 }