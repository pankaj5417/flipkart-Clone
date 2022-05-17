import { ADD_TO_CART, GET_CART_DATA, REMOVE_FROM_CART } from "./cartActionType";

export const addToCartSuccess = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const getCartDataSuccess = (data) => {
  return {
    type: GET_CART_DATA,
    payload: data,
  };
};
export const addToCart = (data) => async (dispatch) => {
  try {
     fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/cartData`,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
          " Content-Type":"application/json",
        },
      }
    )
    .then(res=>res.json().then(d=>{
        dispatch(addToCartSuccess(d));
        dispatch(getCartData());

    }))
    
  } catch (err) {
    console.log("error occured while getting cart data");
  }
};
export const getCartData = (data) => async (dispatch) => {
  const res = await fetch(
    `https://my-json-server.typicode.com/pankaj5417/json-server/cartData`
  );
  const cartData = await res.json();
  console.log("cartDatas",cartData)
  dispatch(getCartDataSuccess(cartData));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  console.log(id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

 // localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
