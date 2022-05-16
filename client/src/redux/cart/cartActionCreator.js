import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionType"

export const addToCart=(id,quantity)=>async(dispatch)=>{
try{
    const res=await fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/products/${id}`)
    const data=await res.json()
    dispatch({type:ADD_TO_CART,payload: {...data, quantity}})

}catch(err){
    console.log("error occured while getting cart data")
}
}

export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};