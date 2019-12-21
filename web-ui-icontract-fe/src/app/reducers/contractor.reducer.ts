import { Action, createReducer, on } from '@ngrx/store';


export const contractorFeatureKey = 'contractor';

export interface State {

}

export const initialState: State = {

};

const contractorReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return contractorReducer(state, action);
}
