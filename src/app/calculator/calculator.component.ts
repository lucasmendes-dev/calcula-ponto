import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  workload: string = "";
  entryTime: string = "";

  pause: boolean = false;
  breakTime: string = "";
  returnTime: string = "";

  finalResult: string = "";
  empty: string = "";

  constructor() {}

  calculateTime(): void {
    if (this.workload && this.entryTime) {
      const entryTime = new Date("2000-01-01T" + this.entryTime);
      const workload = new Date("2000-01-01T" + this.workload);

      let finalTime = new Date((workload.getTime() + entryTime.getTime()));
      finalTime.setHours(finalTime.getHours() - 1);  //adjusting

      if (this.breakTime && this.returnTime) {
        const breakTime = new Date("2000-01-01T" + this.breakTime);
        const returnTime = new Date("2000-01-01T" + this.returnTime);

        finalTime = new Date(finalTime.getTime() + (returnTime.getTime() - breakTime.getTime()));
      }
      
      this.finalResult = finalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.empty = "";
    } else {
      this.empty = "Por favor, preencha a carga horária e o horário de entrada.";
    }
  }

  reset(): void {
    this.workload = "";
    this.entryTime = "";
    this.finalResult = "";
    this.pause = false;
    this.breakTime = "";
    this.returnTime = "";
  }

  addPause(): void {
    this.pause = !this.pause;
  }

  removePause(): void {
    this.pause = !this.pause;
    this.breakTime = "";
    this.returnTime = "";
    this.finalResult = "";
  }
}
