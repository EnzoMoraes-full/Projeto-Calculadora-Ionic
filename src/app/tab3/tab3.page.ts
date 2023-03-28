import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    private numero1: number | null = null;
    private numero2: number | null = null;
    private operacao: string | null = null;
    public resultado: number | null = null;
  
    numeral(numero: string): void {
      if (this.operacao === null) {
        if (this.numero1 === null) {
          this.numero1 = Number(numero);
        } else {
          this.numero1 = Number(this.numero1.toString() + numero);
        }
        this.resultado = this.numero1;
      } else {
        if (this.numero2 === null) {
          this.numero2 = Number(numero);
        } else {
          this.numero2 = Number(this.numero2.toString() + numero);
        }
        this.resultado = this.numero2;
      }
    }
  
    operador(operacao: string): void {
      this.operacao = operacao;
    }
  
    calculamento(): void {
      if (this.numero1 !== null && this.numero2 !== null && this.operacao !== null) {
        switch (this.operacao) {
          case '+':
            this.resultado = this.numero1 + this.numero2;
            break;
          case '-':
            this.resultado = this.numero1 - this.numero2;
            break;
          case '*':
            this.resultado = this.numero1 * this.numero2;
            break;
          case '/':
            this.resultado = this.numero1 / this.numero2;
            break;
            case '^':
            this.resultado = Math.pow(this.numero1, this.numero2);
            break;
            case '√':
            this.resultado = this.resultado = Math.sqrt(this.numero1);
            break;
          default:
            break;
        }
        this.numero1 = this.resultado;
        this.numero2 = null;
        this.operacao = null;
      }
    }
  
    faxina(): void {
      this.numero1 = null;
      this.numero2 = null;
      this.operacao = null;
      this.resultado = null;
    }
  }
