import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cart/cartActionCreator"

  export default function Cart() {
  const dispatch=useDispatch()
  const {data}=useSelector(state=>({
    // loading:state.cart.loading,
    // err:state.cart.err,
    data:state.cart.cartData
  }))
  useEffect(()=>{
    dispatch(addToCart(1))

  },[])
  
console.log("cartData",data)
  return <div></div>;
}
