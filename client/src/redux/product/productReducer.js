import { GET_PRODUCTDETAIL_ERROR, GET_PRODUCTDETAIL_LOADING, GET_PRODUCTDETAIL_RESET, GET_PRODUCTDETAIL_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./productActionType";

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
                productData:payload
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

export const getProductDetailsReducer = (state = { product: []}, {type,payload}) => {
    
    console.log('Hi',type)
    switch(type){
        case GET_PRODUCTDETAIL_LOADING:
            return { loading: true }
        case GET_PRODUCTDETAIL_SUCCESS:
            return { loading: false, product: payload }
        case GET_PRODUCTDETAIL_ERROR:
            return {
                loading: false,
                error: payload
            }
        case GET_PRODUCTDETAIL_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}