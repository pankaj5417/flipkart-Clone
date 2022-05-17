import { GET_PRODUCTDETAIL_ERROR, GET_PRODUCTDETAIL_LOADING, GET_PRODUCTDETAIL_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./productActionType"

export const getProductLoading=()=>{
    return {
        type:GET_PRODUCT_LOADING
    }
}

export const getProductSuccess=(data)=>{
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

export const getProductDetailLoading=()=>{
    return {
        type:GET_PRODUCTDETAIL_LOADING
    }
}

export const getProductDetailSuccess=(data)=>{
    return {
        type:GET_PRODUCTDETAIL_SUCCESS,
        payload:data,
    }
}
export const getProductDetailError=(err)=>{
    return {
        type:GET_PRODUCTDETAIL_ERROR,
        payload:err
    }
}
export const getProductData=(val,type,num)=>async(dispatch)=>{
    try{
        dispatch(getProductLoading)
    const res=await fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/products?_page=${val}&_limit=3&_sort=${type}&_order=${val}`)
    const data=await res.json()
    console.log("products",data)
    dispatch(getProductSuccess(data))


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
    dispatch(getProductSuccess(data))


    }catch(err){
        dispatch(getProductError(err))
    }
}

export const getProductDetails=(id,type,num)=>async(dispatch)=>{
    try{
        dispatch(getProductDetailLoading)
    const res=await fetch(`https://my-json-server.typicode.com/pankaj5417/json-server/products?id=${id}`)
    const data=await res.json()
    console.log("productDetails",data)
    dispatch(getProductDetailSuccess(data))


    }catch(err){
        dispatch(getProductDetailError(err))
    }
}