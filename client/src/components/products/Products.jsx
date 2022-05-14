import { Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductData } from "../../redux/product/productActionCreator";

const useStyle = makeStyles({
  container:{
display:"flex",
margin:"10px",
padding:"10px",
backgroundColor:"lightgrey",
justifyContent:"space-between",

  },
  grid:{
    width:"78%",
    padding:"10px",
    backgroundColor:"#fff",
     borderRadius:"5px"
  },
  gridcontainer: {
    width: "220px",
    textAlign: "center",
  },
  sidebar:{
    width:"18%",
    marginTop:"50px",
    padding:"10px",
    backgroundColor:"#fff",
    borderRadius:"5px"



  },
  image: {
    width: "200px",
    height:180
  },
  wrapper:{
    padding:"35px 15px"
   },
  selectBox:{
     width:"97%",
      outline:"none !important",
      border:"none !important"
        }
});
export default function Products() {
  const classes = useStyle();
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const { loading, err, data } = useSelector((state) => ({
    loading: state.products.isLoading,
    err: state.products.isError,
    data: state.products.productData,
  }));


  const genderNames = [
    'Male',
    "Female",
    "other"
  ];
  const categoryName=[
    "Winter Wear",
    "TopWear",
    "BottomWear",
    "Kitchen Essential"
  ]
  const brandNames=[
"ADDIDAS",
"ARROW",
"ROADSTAR",
"KILLER",

  ]
    const [personName, setPersonName] = useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    
  
  function getProducts() {
     dispatch(getProductData())
    setItem(data);
  }


  useEffect(() => {
    getProducts();
    //dispatch(getProductData());
  }, [item]);
  

  return loading ? (
    <div>Loading.....</div>
  ) : err ? (
    <div>Something went wrong</div>
  ) : (
    <>
    <Box className={classes.container}>
    <Box className={classes.sidebar}>
      <h3>Filters</h3>
      <hr />
      <h3>Categories</h3>

      <FormControl variant="standard" sx={{ m: 1, width: 250 }} className={classes.selectBox}>
        <InputLabel id="demo-multiple-name-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {categoryName.map((name) => (
            <MenuItem
              key={name}
              value={name}
             // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <hr />

      <FormControl variant="standard" sx={{ m: 1, width: 250 }} className={classes.selectBox}>
          <InputLabel variant="standard" id="demo-multiple-checkbox-label">Gender</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Gender" />}
            renderValue={(selected) => selected.join(', ')}
           
          >
            {genderNames.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <hr />
        
      <FormControl variant="standard" sx={{ m: 1, width:"100%" }} className={classes.selectBox}>
          <InputLabel id="demo-multiple-checkbox-label">Brand</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Gender" />}
            renderValue={(selected) => selected.join(', ')}
           
          >
            {brandNames.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </Box>
    
      <Box className={classes.grid} style={{marginTop:"50px" }} >
        <Box style={{display:"flex", width:"50%",justifyContent:"space-between"}}>
        <span>Sort by</span>
          <div>Popularity</div>
          <div>Price--Low to High</div>
          <div>Price--High to Low</div>
          <div>Newest First</div>
        </Box>
        <hr />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}    style={{gap:"20px" }}>
        {item.map((item) => (
          <>
          <Box textAlign="center" className={classes.wrapper}>
          <img src={item.url} alt="" className={classes.image}/>
          <Typography className={classes.text} style={{fontWeight:600, color:"#212121"}} >{item.title.shortTitle}</Typography>
          <span>₹<strong>{item.price.cost}</strong></span>&nbsp;&nbsp;<span style={{textDecoration:"line-through"}}>₹{item.price.mrp}</span>&nbsp;&nbsp;<span style={{ color:"green"}}>{item.price.discount}off</span>
          <Typography className={classes.text} style={{ color:"green"}}>{item.discount}</Typography>
          <Typography className={classes.text} style={{opacity:"0.6", color:"#212121"}}>{item.tagline}</Typography>
          </Box>
      
          </>
          
        ))}
      </Grid>
      </Box>

    </Box>

  
    </>
  );
}
