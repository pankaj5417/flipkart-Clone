import { Box, Grid } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getProductData } from "../../redux/product/productActionCreator"

export default function Products() {
  const dispatch=useDispatch()
  const {loading,err,data}=useSelector(state=>({
    loading:state.products.isLoading,
    err:state.products.isError,
    data:state.products.productData
  }))
  function getProducts(){
     dispatch(getProductData())
    
   }
   useEffect(()=>{
    getProducts()
  },[])
 console.log("productData",data)
  return (
   <>
   <Grid>
{data.map(item=>{
  <Box>
  <img src={item.url} alt="" />
  
  </Box>

})}
   </Grid>
   
   
   </>
  )
}
