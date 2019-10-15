import { Action } from '@ngrx/store';
import { Product } from '../model';

export enum MainActionTypes{
    MainActionAddProduct = '[MainAction] Add Product',
    MainActionAddProductSuccess = '[MainAction] Add Product Success',
    MainActionAddProductFailed = '[MainAction] Add Product Failed',

    MainActionCreateProduct = '[MainAction] Create Product',
    MainActionUpdateProduct = '[MainAction] Update Product',
    MainActionDeleteProduct = '[MainAction] Delete Product',
    MainActionUpdateCartTotalFirst = '[MainAction] Add Cart Total 1st Time',
    MainActionUpdateCartTotalFinal = '[MainAction] Total Cart',
    MainActionFormValue = '[MainAction] Form Value',


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

export class MainActionUpdateProduct implements Action {
    readonly type = MainActionTypes.MainActionUpdateProduct;
    constructor(public id: number, public changes: Partial<Product>) {}
}

export class MainActionCreateProduct implements Action {
    readonly type = MainActionTypes.MainActionCreateProduct;
    constructor(public product: Product) {}
}
export class MainActionDeleteProduct implements Action {
    readonly type = MainActionTypes.MainActionDeleteProduct;
    constructor(public id: number) {}
}
export class MainActionUpdateCartTotalFirst implements Action {
    readonly type = MainActionTypes.MainActionUpdateCartTotalFirst;
    constructor(public id: number, public changes: Partial<Product>) {}
}
export class MainActionUpdateCartTotalFinal implements Action {
    readonly type = MainActionTypes.MainActionUpdateCartTotalFinal;
    constructor(public payload: any) {}
}
export class MainActionFormValue implements Action {
    readonly type = MainActionTypes.MainActionFormValue;
    constructor(public payload: any) {}
}


export type MainActions = 
    | MainActionAddProduct
    | MainActionAddProductSuccess
    | MainActionAddProductFailed
    | MainActionCreateProduct
    | MainActionUpdateProduct
    | MainActionDeleteProduct
    | MainActionUpdateCartTotalFirst
    | MainActionUpdateCartTotalFinal
    | MainActionFormValue