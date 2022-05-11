import {Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
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
          <Slide timer={true} dealTitle={"Deal of the Day"}/>

              </Box>
              <Box className={classes.rightwrapper}>
                  <img src={adURL} alt="" style={{width:"230px"}} />
              </Box>
          </Box>

          </Box>
          
          {/* <Slide timer={false} dealTitle="Suggested for You"/> */}
          {/* <Slide timer={false} dealTitle="Your Favourite Deal"/> */}
          {/* <MidSection/> */}
          {/* <Slide timer={false} dealTitle="Discounts for You"/>
          <Slide timer={false} dealTitle="Recommended items"/>
          <Slide timer={true} dealTitle="Best deal"/> */}



      </div>
  )
  
}

export default Home;
