import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{counter}}</h3>
    <button (click)="incremetar(1)">+1</button>
    <button (click)="Reset()">Reset</button>
    <button (click)="incremetar(-1)">-1</button>
  `,
  standalone:false
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10

  incremetar(value: number) : void{
    this.counter+=value;
  }

  Reset() : void{
    //this.counter = origen;
    this.counter = 10;
  }
}
