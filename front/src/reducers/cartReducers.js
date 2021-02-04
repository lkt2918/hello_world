import { CART_ADD_ITEM, 
        CART_REMOVE_ITEM ,
        CART_SAVE_SHIPPING_ADDRESS,
        CART_SAVE_PAYMENT_METHOD,
        CART_EMPTY,
    } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            /*find if the item is already in the cart ITEMS */
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    /* Use map to update the changed item*/ 
                    cartItems: state.cartItems.map(x => 
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return {...state, cartItems: [...state.cartItems, item]};
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload }; 
        case CART_REMOVE_ITEM:
            //equal to remove the specific one  
            return {...state, cartItems: state.cartItems.filter(x => x.product !== action.payload),}
        case CART_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_EMPTY:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
}