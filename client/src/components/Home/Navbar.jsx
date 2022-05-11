import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { navData } from '../../constants/data';

const useStyle=makeStyles({
    component:{
        display:"flex",
        margin:"55px 130px 0 130px",
        justifyContent:"space-between"

    },
    container:{
        textAlign:"center",
        padding:"12px 8px"
    },
    image:{
        width:64
    },
    text:{
        fontSize:14,
        fontWeight:600


    }
})

export default function Navbar() {

    const classes=useStyle()
  return (
      <Box className={classes.component}>
          {navData.map(data=>(
              <Box>
                  <img src={data.url} alt="" className={classes.image} />
               <Typography className={classes.text}>{data.text}</Typography>

              </Box>
          ))}
      </Box>
  )
}
