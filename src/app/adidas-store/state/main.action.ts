import { createAction, props } from '@ngrx/store';

export const MainActionCreateProduct = createAction('[MainAction] Create Product',props<{ product: any }>());
export const MainActionDeleteProduct = createAction('[MainAction] Delete Product', props<{ id: any}>());
export const MainActionUpdateProduct = createAction('[MainAction] Update Product', props<{product: {id: number; changes: Partial<any>}}>());
export const MainActionUpdateCartTotalFirst = createAction('[MainAction] Add Cart Total 1st Time', props<{ product: {id: number; changes: Partial<any>}}>());
export const MainActionUpdateCartTotalFinal = createAction('[MainAction] Total Cart', props<{ payload: any}>());
export const MainActionFormValue = createAction('[MainAction] Form Value', props<{payload: any}>());

