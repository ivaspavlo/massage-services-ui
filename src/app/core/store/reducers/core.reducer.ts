
import { Action, createReducer } from '@ngrx/store';

export interface ICoreState {
  [key: string]: any;
}

const initialState: ICoreState = { };

const corePageReducer = createReducer<ICoreState, Action>(
  initialState,
);

export default function(state: ICoreState = initialState, action: Action) {
  return corePageReducer(state, action);
}
