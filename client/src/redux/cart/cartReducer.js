import { ADD_TO_CART, GET_CART_DATA, REMOVE_FROM_CART } from "./cartActionType";

const initialState = {
  cartData: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,

        cartData: payload,
      };
    case GET_CART_DATA:
      return {
        ...state,

        cartData: payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartData: state.cartData.filter((prod) => prod.id !== payload),
      };
    default:
      return state;
  }
};
