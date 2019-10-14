import { MainActionTypes , MainActions } from './main.action';
import { productAdapter, initialState } from '../model';
// export const initialState: any = {
//     cart: []
// }

export function mainReducer(state = initialState, action: MainActions) {
    switch (action.type) {
            case MainActionTypes.MainActionCreateProduct:
                return productAdapter.addOne(action.product, state);
            case MainActionTypes.MainActionUpdateCartTotalFirst:
                return productAdapter.updateOne({
                    id: action.id,
                    changes: action.changes,
                }, state);
            case MainActionTypes.MainActionUpdateProduct:
                    return productAdapter.updateOne({
                        id: action.id,
                        changes: action.changes,
                    }, state);
            case MainActionTypes.MainActionDeleteProduct:
                return productAdapter.removeOne(action.id, state)
            case MainActionTypes.MainActionUpdateCartTotalFinal:
                return {
                    ...state,
                    totalCart: action.payload
                }
        default:
            return state;
    }
}