import { createAction, createReducer, on } from '@ngrx/store';

// actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset     = createAction('[Counter] Reset');

// reducer (just a number)
export const counterReducer = createReducer(
  0, // initial state
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset,     () => 0)
);
