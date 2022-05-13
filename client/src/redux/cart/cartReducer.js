import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActionType"

const initialState={
    cartData:[]
}
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item=action.payload;
            const existItem=state.cartData.find(prod=>prod.id===item.id)
            console.log(existItem)
            if(existItem){
                return {
                  ...state, cartData:state.cartData.map(d=>d.product===existItem.product?item:d)
                }
                }else{
                    let a={...state, cartData:[...state.cartData, item]}
                      return a
            }
            case REMOVE_FROM_CART:
                return {
                    ...state, cartData:state.cartData.filter(prod=>prod.id!==action.payload)
                }
                default:
                    return state
    }

}