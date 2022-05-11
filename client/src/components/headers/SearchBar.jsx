import React from 'react';
import {alpha,InputBase} from "@mui/material"
import { makeStyles } from '@mui/styles';

import {Search} from '@mui/icons-material';
const useStyle=makeStyles((theme)=>({
    search: {
      //  position: 'relative',
        borderRadius:2,
        background:"#fff",
        marginRight: theme.spacing(2),
        marginLeft: 10,
        width: '40%',
        display:"flex",
      
        
      },
      searchIcon: {
        padding: 5,
        height: '100%',
       // position: 'absolute',
       // pointerEvents: 'none',
        display: 'flex',
        
        color:"blue",

      },
      inputRoot: {
          fontSize:"unset",
        width:"100%"
      },
      inputInput: {
        paddingLeft:20,
        // vertical padding + font size from searchIcon
      
       
      },
}))

function SearchBar(){

    const classes=useStyle()
  return (
    <div className={classes.search}>
   
    <InputBase
      placeholder="Searc for products, brands and more"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
     <div className={classes.searchIcon}>
      <Search />
    </div>
  </div>
  )

 
}

export default SearchBar;
