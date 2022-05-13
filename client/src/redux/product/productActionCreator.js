import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./productActionType"

export const getProductLoading=()=>{
    return {
        type:GET_PRODUCT_LOADING
    }
}

export const getProductSucces=(data)=>{
    return {
        type:GET_PRODUCT_SUCCESS,
        payload:data,
    }
}
export const getProductError=(err)=>{
    return {
        type:GET_PRODUCT_ERROR,
        payload:err
    }
}
export const getProductData=(id)=>async(dispatch)=>{
    try{
        dispatch(getProductLoading)
    const res=await fetch(`http://localhost:3001/products/${id}`)
    const data=await res.json()
    dispatch(getProductSucces(data))


    }catch(err){
        dispatch(getProductError(err))
    }
}