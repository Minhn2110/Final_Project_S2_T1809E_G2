import { Action } from '@ngrx/store';

export enum MainActionTypes{
    MainActionAddProduct = '[MainAction] Add Product',
    MainActionAddProductSuccess = '[MainAction] Add Product Success',
    MainActionAddProductFailed = '[MainAction] Add Product Failed',
}

export class MainActionAddProduct implements Action {
    readonly type = MainActionTypes.MainActionAddProduct;
    constructor(public payload: any) {}
}

export class MainActionAddProductSuccess implements Action {
    readonly type = MainActionTypes.MainActionAddProductSuccess;
    constructor(public payload: any) {}
}

export class MainActionAddProductFailed implements Action {
    readonly type = MainActionTypes.MainActionAddProductFailed;
    constructor(public payload: any) {}
}

export type MainActions = 
    | MainActionAddProduct
    | MainActionAddProductSuccess
    | MainActionAddProductFailed