import CartActionTypes from './compare.types';
import { addItemToCart, removeItemFromCart } from './compare.utils';

const INITIAL_STATE = {
    compareItems: []
};

const compareReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CartActionTypes.ADD_COMPARE_ITEM:
            return {
                ...state,
                compareItems: [...state.compareItems, action.payload]
            };
        // case CartActionTypes.REMOVE_ITEM:
        //     return {
        //         ...state,
        //         cartItems: removeItemFromCart(state.cartItems, action.payload)
        //     };
        // case CartActionTypes.CLEAR_ITEM_FROM_CART:
        //     return {
        //         ...state,
        //         cartItems: state.cartItems.filter(
        //             cartItem => cartItem.id !== action.payload.id
        //         )
        //     };
        default:
            return state;
    }
};

export default compareReducer;