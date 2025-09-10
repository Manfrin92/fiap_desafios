import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../ngrx/counter.state';

@Component({
  selector: 'app-writer',
  imports: [],
  template: ` <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="reset()">Reset</button>`,
})
export class Writer {
  constructor(private store: Store<{ counter: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
