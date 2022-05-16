import { Box, Button, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from '../../constants/data';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
const useStyle=makeStyles({
    image:{
        height:150,

    },
    component:{
        marginTop:12,
        background:"#FFFFFF"
    },
    padding:{
       
    },
    deal:{
        padding:"15px 20px",
        display:"flex"
    },
    dealText:{
      fontWeight:600,
      fontSize:22,
      lineHeight:"32px",
      marginLeft: 25 
    },
    timer:{
        color:"#7f7f7f",
        marginLeft:10,
        display:"flex",
        alignItems:"center"
    },
    button:{
        marginLeft:"auto",
        background:"#2874f0",
        borderRadius:2,
        fontSize:13
    },
    wrapper:{
padding:"35px 15px"
    }

    
})
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function Slide({timer,dealTitle}) {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const classes=useStyle()

    const renderer = ({ hours, minutes, seconds, completed }) => {
        
          // Render a countdown
          return <span className={classes.timer}>{hours}:{minutes}:{seconds}Left</span>;
        
      }
  return (
      <Box className={classes.component}>
          <Box className={classes.deal}>
              <Typography className={classes.dealText}>{dealTitle}</Typography>

            {
                timer &&
                <>
                <img src={timerURL} alt="" style={{width:24}} />
            <Countdown  date={Date.now() + 5.04e+7} renderer={renderer}/>,
            <Button className={classes.button} variant='contained' color="primary">View All</Button>
                </>
            }
          </Box>
          <Divider/>
      <Carousel 
      responsive={responsive} className={classes.padding}
      infinite={true}
      draggable={false}
      swipeable={false}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet','mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
          {
  
                  products.map(product=>(
                    <Link to="/products" style={{textDecoration:"none"}}>

                      <Box textAlign="center" className={classes.wrapper}>
                          <img src={product.url} alt="" className={classes.image}/>
                          <Typography className={classes.text} style={{fontWeight:600, color:"#212121"}} >{product.title.shortTitle}</Typography>
                          <Typography className={classes.text} style={{ color:"green"}}>{product.discount}</Typography>
                          <Typography className={classes.text} style={{opacity:"0.6", color:"#212121"}}>{product.tagline}</Typography>

                      </Box>
                      </Link>
                  ))

            
          }

      </Carousel>
      </Box>

  )
}
