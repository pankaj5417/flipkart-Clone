import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams ,useNavigate } from "react-router-dom";
import clsx from "clsx";
import {
  ShoppingCart as Cart,
  FlashOn as Flash,
  LocalOffer as Badge,
} from "@mui/icons-material";
import { addToCart, addToCartSuccess, getCartData } from "../../redux/cart/cartActionCreator";
import { getProductDetails } from "../../redux/product/productActionCreator";
import { JSON_API } from "../../url";

const useStyle = makeStyles({
  productDetailContainer: {
    marginTop: 55,
    background: '#F2F2F2'
  },
  component: {
    marginTop: 55,
    background: '#F2F2F2'
},
container: {
    background: '#FFFFFF',
    // margin: '0 80px',
    display: 'flex',
    // [theme.breakpoints.down('md')]: {
    //     margin: 0
    // }
},
rightContainer: {
    marginTop: 50,
    padding:"10px",
    '& > *': {
        marginTop: 10
    }
},
price: {
    fontSize: 28
},
smallText: {
    fontSize: 14,
},
greyTextColor: {
    color: '#878787'
},
  leftContainer: {
    minWidth: "40%",
    width:"60%",

    padding: "40px 0 0 80px",
    
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  
  addToCart: {
    background: "#ff9f00 !important",
    color: "#FFF",
    marginRight:"10px",
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  buyNow: {
    background: "#fb641b !important",
    color: "#FFF",
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  smallText: {
    fontSize: 14,
   // verticalAlign: 'baseline',
    '& > *' :{
        fontSize: 14,
        marginTop: 10
    }
},
greyTextColor: {
    color: '#878787'
},
badge: {
    marginRight: 10,
    color: '#00CC00',
    fontSize: 15
},
wrapper: {
    display: 'flex'
}
});

export default function ProductDetail() {
  const params = useParams();
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { data,loading } = useSelector((state) => ({
    loading: state.productDetails.isLoading,
    err: state.productDetails.isError,
    data: state.productDetails.product,
  }));
  console.log("detailsData",data)
  const { id, price, detailUrl, title } =data;
  const [quantity,setQuantity]=useState(1)
  // const addItemToCart = (d) => {
  //    dispatch(addToCart(d));
  //     // navigate('/cart');
  // };

  const addItemToCart=(datas)=>{
   
    fetch(`${JSON_API}/cartData`,{
      method:"POST",
      body:JSON.stringify(datas),
        headers:{
            "Content-Type":"application/json",
        },
    }).then((d)=>d.json()).then((res)=>{
      console.log("postData",res)
        //success
        dispatch(addToCartSuccess(res));
        dispatch(getCartData());

    }).catch(err=>{
        //error
        console.log(err)
       
        

    })


 }
  useEffect(() => {
    // if(data && params.id !== data.id)   
        dispatch(getProductDetails(params.id));
}, []);

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const d=data
  return (
    <>
      <Box className={classes.productDetailContainer}>
        {data.map((d) =>
          d.id === params.id ? (
            <>
              <Grid container className={classes.container}>

                <Grid item lg={4} md={4} sm={8} xs={12} >
                  <Box className={classes.leftContainer}>
                    <img src={d.url} alt="" className={classes.productImage} />
                    <Button
                      variant="contained"
                      onClick={()=>{
                        addItemToCart(d);

                      }}
                      className={ classes.addToCart}
                    >
                      <Cart /> ADD TO CART
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.buyNow}
                    >
                      <Flash />
                      BUY NOW
                    </Button>
                  </Box>
                </Grid>

                <Grid
                  item
                  lg={8}
                  md={8}
                  sm={8}
                  xs={12}
                  className={classes.rightContainer}
                >
                  <Typography>{d.title.longTitle}</Typography>
                  <Typography
                    className={clsx(classes.greyTextColor, classes.smallText)}
                    style={{ marginTop: 5 }}
                  >
                    8 Ratings & 1 Reviews
                    <span>
                      <img
                        src={fassured}
                        style={{ width: 77, marginLeft: 20 }} 
                        alt=""
                      />
                    </span>
                  </Typography>
                  <Typography>
                    <span className={classes.price}>₹{d.price.cost}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}>
                      <strike>₹{d.price.mrp}</strike>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#388E3C" }}>
                      {d.price.discount} off
                    </span>
                  </Typography>

                  <Typography>Available offers</Typography>
                  <Box className={classes.smallText}>
                    <Typography>
                      <Badge className={classes.badge} />
                      Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank
                      Credit Card
                    </Typography>
                    <Typography>
                      <Badge className={classes.badge} />
                      Bank Offer 10% Off on Bank of Baroda Mastercard debit card
                      first time transaction, Terms and Condition apply
                    </Typography>
                    <Typography>
                      <Badge className={classes.badge} />
                      Purchase this Furniture or Appliance and Get Extra ₹500
                      Off on Select ACs
                    </Typography>
                    <Typography>
                      <Badge className={classes.badge} />
                      Partner OfferExtra 10% off upto ₹500 on next furniture
                      purchase
                    </Typography>
                  </Box>
                  <Table >
                    <TableBody>
                      <TableRow className={classes.smallText} style={{border:"none"}}>
                        <TableCell className={classes.greyTextColor}>
                          Delivery
                        </TableCell>
                        <TableCell style={{ fontWeight: 600 }}>
                          Delivery by {date.toDateString()} | ₹40
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.smallText} style={{border:"1px solid lightgrey",borderRadius:"1px"}}>
                        <TableCell className={classes.greyTextColor}>
                          Warranty
                        </TableCell>
                        <TableCell>No Warranty</TableCell>
                      </TableRow>
                      <TableRow className={classes.smallText} style={{border:"1px solid lightgrey",borderRadius:"1px"}}>
                        <TableCell className={classes.greyTextColor}>
                          Seller
                        </TableCell>
                        <TableCell className={classes.smallText}>
                          <span style={{ color: "#2874f0" }}>SuperComNet</span>
                          <Typography>GST invoice available</Typography>
                          <Typography>
                            View more sellers starting from ₹329
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow style={{border:"1px solid lightgrey",borderRadius:"1px"}}>
                        <TableCell colSpan={2}>
                          <img src={adURL} style={{ width: 390 }} alt=""/>
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.smallText} style={{border:"1px solid lightgrey",borderRadius:"1px"}}>
                        <TableCell className={classes.greyTextColor}>
                          Description
                        </TableCell>
                        <TableCell>{d.description}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>

            </>
           ) : (
            ""
          )
        )} 
      </Box>
    </>
  );
}
