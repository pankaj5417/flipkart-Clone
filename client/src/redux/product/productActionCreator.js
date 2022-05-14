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
    const res=await fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/products`)
    const data=await res.json()
    console.log(data)
    dispatch(getProductSucces(data))


    }catch(err){
        dispatch(getProductError(err))
    }
}