export class TimerModel {
    public timeLimit :number;
    public action :string;

    constructor(timeLimit: number,action: string){
        this.timeLimit = timeLimit;
        this.action = action;
    }
}