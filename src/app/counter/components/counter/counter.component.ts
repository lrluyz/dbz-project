import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(5)"> + 1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy()"> - 1</button>

    <hr>

  `  
})
export class CouterComponent{
    public counter: number = 10;

    increaseBy(value: number): void{
      this.counter += value;
    }
  
    decreaseBy(): void{
      this.counter -= 1;
    }
  
    reset(){
      this.counter = 10;
    }
}