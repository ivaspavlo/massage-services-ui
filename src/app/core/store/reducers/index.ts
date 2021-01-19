
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';

import UserState, { IUserState } from './user.reducer';
import CoreState, { ICoreState } from './core.reducer';

import * as AuthActions from '../actions/auth.actions';


export interface ICoreModuleState {
  user: IUserState;
  core: ICoreState;
  [key: string]: any; // For feature stores
}

export const coreModuleState: ActionReducerMap<ICoreModuleState> = {
  user: UserState,
  core: CoreState
};

export function resetState(
  reducer: ActionReducer<ICoreModuleState>
): ActionReducer<ICoreModuleState> {
  return (state, action) => {
    if (action.type === AuthActions.ACTION_TYPES.LOGOUT_SUCCESS) { state = undefined; }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [resetState];

export const coreModuleStateToken = new InjectionToken<ActionReducerMap<ICoreModuleState>>('CORE_MODULE_STATE');
