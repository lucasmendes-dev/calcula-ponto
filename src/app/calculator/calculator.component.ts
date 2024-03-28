import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  cargaHoraria: string = "";
  entrada: string = "";
  resultado: string = "";
  empty: string = "";

  constructor() {}

  calculaPonto(): void {
    if (this.cargaHoraria && this.entrada) {
      const horarioEntrada = new Date("2000-01-01T" + this.entrada);
      const cargaHoraria = new Date("2000-01-01T" + this.cargaHoraria);

      let horaFinal = new Date((cargaHoraria.getTime() + horarioEntrada.getTime()));
      horaFinal.setHours(horaFinal.getHours() - 1);  //adjusting

      this.resultado = horaFinal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.empty = "";
    } else {
      this.empty = "Por favor, preencha a carga horária e o horário de entrada.";
    }
  }
  
  reset(): void {
    this.cargaHoraria = "";
    this.entrada = "";
    this.resultado = "";
  }
}


