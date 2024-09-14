import { createAction, props } from '@ngrx/store';
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customIncrement = createAction(
  'customincrement',
  props<{ value: number }>() // To give Parameters
);
export const customTextAdd = createAction(
  'customTextAdd',
  props<{ channelName: string }>()
);
