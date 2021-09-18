import CompareTypes from './compare.types';

export const toggleCartHidden = () => ({
    type: CompareTypes.TOGGLE_CART_HIDDEN
});

export const addCompareItem = item => ({
    type: CompareTypes.ADD_COMPARE_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CompareTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CompareTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});