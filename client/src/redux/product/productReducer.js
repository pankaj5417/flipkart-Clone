import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./productActionType";

const initialState={
    isLoading:false,
    isError:false,
    productData:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_LOADING:
            return {...state,
                isLoading:true,
                isError:false,
                productData:[]
            }
    
    case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                productData:[...state.productData,payload]
            }
    
    case GET_PRODUCT_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true,
                productData:[]
            }
             default:
                return {
                    state

                }
    
}
}