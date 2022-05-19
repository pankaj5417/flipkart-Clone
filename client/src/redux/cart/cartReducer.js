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


// case ADD_TO_CART:
//   const { payload } = aciton;
//   const item = state.cartItems.find(
//     product => product.id === payload.id,
//   );

//   if (item) {
//     return {
//       ...state,
//       cartItems: state.cartItems.map(item => item.id === payload.id
//         ? {
//           ...item,
//           qty: item.qty + 1,
//         }
//         : item
//       ),
//       totalPrice: state.totalPrice + payload.price,
//     };
//   }

//   return {
//     ...state,
//     cartItems: [...state.cartItems, payload],
//     totalPrice: state.totalPrice + payload.price,
//   };