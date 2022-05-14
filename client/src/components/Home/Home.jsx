import {Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import MidSection from './MidSection';
import Navbar from './Navbar';
import Slide from './Slide';

const useStyle=makeStyles({
    component:{
        padding:"10px",
        background:"#F2F2F2"
    },
    rightwrapper:{
        background:"#FFFFFF",
        padding:5,
        margin:"12px 0 0 10px",

    }
})
function Home() {
    const classes=useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
      <div>
          <Navbar/>
          <Box className={classes.component}>
          <Banner/>
          <Box style={{display:"flex"}}>
              <Box style={{width:"83%"}}>
                  <Link to="/products"  style={{textDecoration:"none"}}>
          <Slide timer={true} dealTitle={"Deal of the Day"}/>
                  
                  </Link>

              </Box>
              <Box className={classes.rightwrapper}>
                  <img src={adURL} alt="" style={{width:"230px"}} />
              </Box>
          </Box>

          </Box>
          <Link to="/products" style={{textDecoration:"none"}}>
           <Slide timer={false} dealTitle="Suggested for You"/> 
          
          </Link>
           <Slide timer={false} dealTitle="Your Favourite Deal"/> 
           <MidSection/> 
           <Slide timer={false} dealTitle="Discounts for You"/>
          <Slide timer={false} dealTitle="Recommended items"/>
          <Slide timer={true} dealTitle="Best deal"/> 



      </div>
  )
  
}

export default Home;
