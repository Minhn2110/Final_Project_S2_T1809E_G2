import { createReducer, Action, on } from '@ngrx/store';
import * as newAction from './main.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface Product {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  quantity: number;
  cartTotal: number;
  currentQuantity: number;
}

export const productAdapter = createEntityAdapter<Product>();
export interface State extends EntityState<Product> { }

const defaultProduct = {
  ids: [],
  entities: {}
}

export const initialState: State = productAdapter.getInitialState(defaultProduct);

const scoreboardReducer = createReducer(
  initialState,
  on(newAction.MainActionCreateProduct, (state, { product }) => {
    return productAdapter.addOne(product, state)
  }),
  on(newAction.MainActionUpdateCartTotalFirst, (state, { product }) => {
    return productAdapter.updateOne(product, state);
  }),
  on(newAction.MainActionUpdateProduct, (state, { product }) => {
    return productAdapter.updateOne(product, state);
  }),
  on(newAction.MainActionDeleteProduct, (state, { id }) => {
    return productAdapter.removeOne(id, state);
  }),
  on(newAction.MainActionUpdateCartTotalFinal, (state, { payload }) => {
    return {...state, totalCart: payload}
}),
  on(newAction.MainActionFormValue, (state, {payload}) => {
    return {...state, formValue: payload}
  })
);

export function adidasReducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
