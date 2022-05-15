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
export const getProductData=(val,type,num)=>async(dispatch)=>{
    try{
        dispatch(getProductLoading)
    const res=await fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/products?_page=${val}&_limit=3&_sort=${type}&_order=${val}`)
    const data=await res.json()
    console.log("products",data)
    dispatch(getProductSucces(data))


    }catch(err){
        dispatch(getProductError(err))
    }
}

export const getFilteredData=(val,type,num)=>async(dispatch)=>{
    try{
        dispatch(getProductLoading)
    const res=await fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/products?id=${val}`)
    const data=await res.json()
    console.log("filterdDatas",data)
    dispatch(getProductSucces(data))


    }catch(err){
        dispatch(getProductError(err))
    }
}