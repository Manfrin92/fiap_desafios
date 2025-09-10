import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../ngrx/counter.state';


@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>Current Count: {{ counter$ | async }}</h1>

  `
})
export class Reader {
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
  reset()     { this.store.dispatch(reset()); }
}
