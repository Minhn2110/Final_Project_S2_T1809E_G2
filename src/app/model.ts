import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import * as actions from './state/main.action';

export interface Product {
    id: number;
    name: string;
    type:string;
    image:string;
    price:number;
    quantity:number;
}

export const productAdapter = createEntityAdapter<Product>();
export interface State extends EntityState<Product> { }

const defaultProduct = {
    ids: [],
    entities: {}
}


export const initialState: State = productAdapter.getInitialState(defaultProduct);
