import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as mainReducer from './main.reducer';

const getMainReducerState = createFeatureSelector<any>('mainReducer');

export const getProduct = createSelector(
    getMainReducerState,
    state => state.entities
)
export const getTotalCart = createSelector(
    getMainReducerState,
    state => state.totalCart
)