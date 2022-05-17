import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../redux/cart/cartActionCreator"
import { Box, Typography, Button, Grid } from '@mui/material';
import {  makeStyles } from "@mui/styles";

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useParams } from "react-router-dom";

const useStyle = makeStyles(theme => ({
  component: {
       marginTop: 55,
      padding: '30px 135px',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
          padding: '15px 0'
      }
  },
  leftComponent: {
      // width: '67%',
      paddingRight: 15,
      [theme.breakpoints.down('sm')]: {
          marginBottom: 15
      }
  },
  header: {
      padding: '15px 24px',
      background: '#fff'
  },
  bottom: {
      padding: '16px 22px',
      background: '#fff',
      boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
      borderTop: '1px solid #f0f0f0'
  },
  placeOrder: {
      display: 'flex',
      marginLeft: 'auto',
      background: '#fb641b',
      color: '#fff',
      borderRadius: 2,
      width: 250,
      height: 51
  }
}));

  export default function Cart() {
  const dispatch=useDispatch()
  const params=useParams()
  const {data}=useSelector(state=>({
    // loading:state.cart.loading,
    // err:state.cart.err,
    data:state.cart.cartData
  }))
  


    const classes = useStyle();

    // const cartDetails = useSelector(state => state.cart);
    // const { cartItems } = cartDetails;

   
    
    // useEffect(() => {
    //     if(cartItems && params.id !== cartItems.id)   
    //         dispatch(addToCart());
    //     console.log(cartItems);
    // }, [dispatch, cartItems]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    const buyNow=()=>{

    }

  
console.log("cartData",data)
  return (
    <>
     { data.length ? 
            <Grid container className={classes.component}>
                <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({data?.length})</Typography>
                    </Box>
                        {   data.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <Box className={classes.bottom}>
                        <Button onClick={() => buyNow()} variant="contained" className={classes.placeOrder}>Place Order</Button>
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={data} />
                </Grid>
            </Grid> : <EmptyCart />
        }
    </>
  )
}
