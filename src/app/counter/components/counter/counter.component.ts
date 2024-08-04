import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter : {{ counter }}</h3>
    <div>
      <button (click)="increaseBy()">Increment</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increaseBy(-1)">Decrement</button>
    </div>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter += value
  }

  resetCounter(): void {
    this.counter = 10
  }
}
