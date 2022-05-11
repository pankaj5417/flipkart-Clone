import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { ImageURL } from '../../constants/data';
const useStyle=makeStyles({
    midimages:{
        display:"flex",
        marginTop:20,
        justifyContent:"space-between"
    }
})
export default function MidSection() {
    const classes=useStyle()
  return (
      <>
      <Box className={classes.midimages}>
          {
              ImageURL.map(image=>(
                  <img src={image} alt="" style={{width:"33%"}}/>
              ))
          }
      </Box>
      </>
  )
}
