import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { CounterState } from 'src/app/models/counter.model';
import {
  customIncrement,
  customTextAdd,
  decrement,
  increment,
  reset,
} from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

const _textReducer = createReducer(
  initialState,
  on(customTextAdd, (state, action) => {
    return {
      ...state,
      text: state.channelName + action.channelName,
    };
  })
);
export function textReducer(state: CounterState | undefined, action: Action) {
  return _textReducer(state, action);
}

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
