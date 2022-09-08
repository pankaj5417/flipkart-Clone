import React from "react";
import { Badge, Box, Button,  Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
const useStyle = makeStyles({
  login: {
    background: "#FFFFFF",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    padding: "5px 40px",
    borderRadius: 2,
    boxShadow: "none",
   
  },
  wrapper: {
   
    margin: "0 7% 0 auto",
    display: "flex",
    alignItems: "center",
    "&>*": {
      marginRight: 50,
      fontSize: 12,
      textDecoration:"none",
      color:"#fff"
      
    },
  },
  container: {
    display: "flex",
  },
});

function HeaderButtons() {
  const classes = useStyle();
  const {userData}=useSelector(state=>({userData:state.userDetail.userDetails}))

  const loginStatus=JSON.parse(localStorage.getItem("loginStatus"))
  const userDetails=JSON.parse(localStorage.getItem("user"))

  const [open,setOpen]=useState(false)
  const {data}=useSelector(state=>({
   
    data:state.cart.cartData
  }))

  const openDialogBox=()=>{
    setOpen(true)
  }
  return (
    <>
   
    <Box className={classes.wrapper}>
       
        {
      loginStatus?<h4>Hello,{userDetails.firstname}</h4>:
    
      <Button variant="contained" className={classes.login} onClick={()=>{openDialogBox()}}>
        Login
      </Button>
        }
       
        <Link to="/more">
      <Typography style={{ marginTop: 5 }}>More</Typography>
        </Link>
      <Link to ="/cart" className={classes.container}>
        <Badge color="secondary" badgeContent={data?.length}>
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <Login open={open} setOpen={setOpen}/>
    </Box>
    </>
  );
}

export default HeaderButtons;
