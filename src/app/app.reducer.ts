
const initialState = {
    app: ''
}

import { createReducer, Action } from '@ngrx/store';

const featureReducer = createReducer(
    initialState,
);

export function AppReducer(state: any | undefined, action: Action) {
    return featureReducer(state, action);
}