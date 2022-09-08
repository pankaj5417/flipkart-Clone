import { ADD_TO_CART, DECREMENT_ITEM, GET_CART_DATA, INCREMENT_ITEM, REMOVE_FROM_CART } from "./cartActionType";

const stateCartItems = JSON.parse(localStorage.getItem('state'))?.cartItems
	? JSON.parse(localStorage.getItem('state')).cartItems
	: [];
const stateTotalPrice = JSON.parse(localStorage.getItem('state'))?.totalPrice
	? JSON.parse(localStorage.getItem('state')).totalPrice
	: 0;
const stateTotalItems = JSON.parse(localStorage.getItem('state'))?.totalItems
	? JSON.parse(localStorage.getItem('state')).totalItems
	: 0;
const initialState = {
  cartData: stateCartItems,
  totalPrice: stateTotalPrice,
  totalItems: stateTotalItems,
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
      case INCREMENT_ITEM:
        

          if (state.cartData.findIndex((item) => item.id === payload.id) !== -1) {
            console.log('hello');
            const index = state.cartData.findIndex((item) => item.id === payload.id);
            if (state.cartData[index].countInStock === 0) {
              return;
            }
        
            console.log(index);
            state.cartData[index].countInStock = state.cartData[index].countInStock - 1;
            state.cartData[index].qty++;
            console.log(state.cartData);
          } else {
            payload['qty'] = 1;
            console.log(payload);
        
            state.cartData.push(payload);
            console.log(payload.price);
          }
          console.log("totalprice",state.totalPrice);
          state.totalPrice = Number((state.totalPrice + payload.price.mrp).toFixed(2));
          // Number(state.totalPrice).toFixed(2);
        
          state.totalItems = state.totalItems + 1;
          localStorage.setItem('state', JSON.stringify(state));
          return {
          ...state,
          cartData: [...state.cartData,state],
          
        };


        case DECREMENT_ITEM:

          const result = state.cartData.find((item) => item.id === payload.id);
          const resultIndex = state.cartData.findIndex((item) => item.id === payload.id);
          if (result.qty === 1) {
            state.cartData[resultIndex].stockInCount--;
        
            //result.stockInCount++;
            state.cartData = state.cartData.filter((item) => item.id !== payload.id);
        
            //console.log(result);
          } else {
            result.qty--;
            result.stockInCount++;
          }
        
          state.totalItems--;
          state.totalPrice = Number((state.totalPrice - result.price.mrp).toFixed(2));
          localStorage.setItem('state', JSON.stringify(state.cartData));
          console.log(JSON.parse(localStorage.getItem('state')).totalItems);
          return {
            ...state,
            cartData: state.cartData.filter((prod) => prod.id !== payload),
          };
    default:
      return state;
  }
};


// addItem(state, action) {
//   console.log(payload.price);
//   console.log(state);

//   if (state.cartData.findIndex((item) => item.id === payload.id) !== -1) {
//     console.log('hello');
//     const index = state.cartData.findIndex((item) => item.id === payload.id);
//     if (state.cartData[index].countInStock === 0) {
//       return;
//     }

//     console.log(index);
//     state.cartData[index].countInStock = state.cartData[index].countInStock - 1;
//     state.cartData[index].qty++;
//     console.log(state.cartData);
//   } else {
//     payload['qty'] = 1;
//     console.log(payload);

//     state.cartData.push(payload);
//     console.log(payload.price);
//   }
//   console.log("totalprice",state.totalPrice);
//   state.totalPrice = Number((state.totalPrice + payload.price.mrp).toFixed(2));
//   // Number(state.totalPrice).toFixed(2);

//   state.totalItems = state.totalItems + 1;
//   localStorage.setItem('state', JSON.stringify(state));
// },

// removeItem(state, action) {
//   const result = state.cartData.find((item) => item.id === payload.id);
//   const resultIndex = state.cartData.findIndex((item) => item.id === payload.id);
//   if (result.qty === 1) {
//     state.cartData[resultIndex].stockInCount--;

//     //result.stockInCount++;
//     state.cartData = state.cartData.filter((item) => item.id !== payload.id);

//     //console.log(result);
//   } else {
//     result.qty--;
//     result.stockInCount++;
//   }

//   state.totalItems--;
//   state.totalPrice = Number((state.totalPrice - result.price.mrp).toFixed(2));
//   localStorage.setItem('state', JSON.stringify(state.cartData));
//   console.log(JSON.parse(localStorage.getItem('state')).totalItems);
// },

// clearCart(state, action) {
//   state.cartData = [];
//   state.totalPrice = 0;
//   state.totalItems = 0;
//   localStorage.setItem('state', JSON.stringify(state));
// },
// cartReset(state, action) {
//   const { cartData, totalItems, totalPrice } = JSON.parse(localStorage.getItem('state'));
//   state.cartData = cartData;
//   state.totalItems = totalItems;
//   state.totalPrice = totalPrice;
// },

// case ADD_TO_CART:
//   const { payload } = aciton;
//   const item = state.cartData.find(
//     product => product.id === payload.id,
//   );

//   if (item) {
//     return {
//       ...state,
//       cartData: state.cartData.map(item => item.id === payload.id
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
//     cartData: [...state.cartData, payload],
//     totalPrice: state.totalPrice + payload.price,
//   };