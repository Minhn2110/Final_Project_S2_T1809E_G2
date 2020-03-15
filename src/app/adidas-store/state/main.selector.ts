import { createFeatureSelector, createSelector } from '@ngrx/store';

const getMainReducerState = createFeatureSelector<any>('adidas');

export const getProduct = createSelector(
    getMainReducerState,
    state => state.entities
)
export const getTotalCart = createSelector(
    getMainReducerState,
    state => state.totalCart
)
export const getFormValue = createSelector(
    getMainReducerState,
    state => state.formValue
)

