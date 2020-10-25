import { setItemAction, resetItemAction } from '../../shared/commonUpdateState';
const initialState = {
    cart: null,
    cartList: [],
    action: {
        type: null,
        isSuccess: false,
        data: null
    },
    isLoading: false
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SET_CART_ACTION': return setItemAction(state, payload, 'CART');
        case 'RESET_CART_ACTION': return resetItemAction(state, 'CART');
        default: return state
    }
}