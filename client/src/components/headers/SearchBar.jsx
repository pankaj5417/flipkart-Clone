import React, { useState } from 'react';
import {alpha,InputBase} from "@mui/material"
import { makeStyles } from '@mui/styles';

import {Search} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilteredData} from '../../redux/product/productActionCreator';
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

  const dispatch = useDispatch();
  const { loading, err, data } = useSelector((state) => ({
    loading: state.products.isLoading,
    err: state.products.isError,
    data: state.products.productData,
  }));
  console.log("data",data)

  const [dataItem,setDataItem]=useState([data])

  const handleChange=(event)=>{
    let searchString=event.target.value.toLocaleLowerCase()
    console.log(searchString)
   // const filteredData=dataItem.filter(prod=>{
     /// return data.title.shortTitle.toLocaleLowerCase().incudes(searchString)
      
    //})   
    dispatch(getFilteredData(searchString))
      //console.log("filteredData",filteredData)
     /// setDataItem(filteredData)
  }

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
      onChange={handleChange}
    />
     <div className={classes.searchIcon}>
      <Search />
    </div>
  </div>
  )

 
}

export default SearchBar;
