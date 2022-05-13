import { ADD_TO_CART } from "./cartActionType"

export const addToCart=(id,quantity)=>async(dispatch)=>{
try{
    const res=await fetch(`http://localhost:3001/products/${id}`)
    const data=await res.json()
    dispatch({type:ADD_TO_CART,payload: {...data, quantity}})

}catch(err){
    console.log("error occured while getting cart data")
}
}