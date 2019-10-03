import { MainActionTypes , MainActions } from './main.action';
export const initialState: any = {
    cart: []
}

export function mainReducer(state = initialState, action: MainActions) {
    switch (action.type) {
        case MainActionTypes.MainActionAddProduct:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}