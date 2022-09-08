import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductData } from "../../redux/product/productActionCreator";

const useStyle = makeStyles({
  container: {
    display: "flex",
  
    margin: "10px",
    padding: "10px",
    backgroundColor: "lightgrey",
    justifyContent: "space-between",
  },
  grid: {
    width: "80%",
    minWidth:"500px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxSizing:"border-box"
  },
  gridcontainer: {
    width: "220px",
    textAlign: "center",
  },
  sidebar: {
    width: "19%",
    minWidth:"150px",
    marginTop: "50px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxSizing:"border-box"
  },
  image: {
    width: "220px",
    height: "250px",
    padding:"3px",
    borderRadius:"2px"

  },
  wrapper: {
    padding: "35px 20px",
  },
  selectBox: {
    width: "97%",
    outline: "none !important",
    border: "none !important",
  },
});
export default function Products() {
  const classes = useStyle();
  //const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const { loading, err, data } = useSelector((state) => ({
    loading: state.products.isLoading,
    err: state.products.isError,
    data: state.products.productData,
  }));

  const genderNames = ["Male", "Female", "other"];
  const categoryName = [
    "Winter Wear",
    "TopWear",
    "BottomWear",
    "Kitchen Essential",
  ];
  const brandNames = ["ADDIDAS", "ARROW", "ROADSTAR", "KILLER"];
  const discount=[
    "10% and below",
    "20% or more",
    "30% or more",
     "40% or more",
     "60% or more"
  ]
  const customerRating=[
    "4★ & above",
    "3★ & above",
    "2★ & above",
    "1★ & above"
    
  ]
  //pagination
  const [page, setPage] = useState(1);
  
    const handlePage = (e,val) => {
      console.log("value",val)
     
      setPage(val);
    };
    console.log("page",page)
    useEffect(()=>{
      
      dispatch(getProductData(`${page}`))
},[page])
   
  
  //filtering
  const [personName, setPersonName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  
  //sorting
  const priceLTH=()=>{
    
    dispatch(getProductData("asc","price.cost"));

  }

  const priceHTL=()=>{
    dispatch(getProductData("desc","price.cost"));

  }
//   function getProducts() {
//     dispatch(getProductData(item));
//     setItem(data);
//   }
useEffect(() => {
  dispatch(getProductData());
  
}, []);
console.log("productData",data)

  return loading? (
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

          <FormControl
            variant="standard"
            sx={{ m: 1}}
            className={classes.selectBox}
          >
            <InputLabel id="demo-multiple-name-label">CATEGORIES</InputLabel>
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

          <FormControl
            variant="standard"
            sx={{ m: 1 }}
            className={classes.selectBox}
          >
            <InputLabel  id="demo-multiple-checkbox-label">
              GENDER
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Gender" />}
              renderValue={(selected) => selected.join(", ")}
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

          <FormControl
            variant="standard"
            sx={{ m: 1, }}
            className={classes.selectBox}
          >
            <InputLabel id="demo-multiple-checkbox-label">BRAND</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Gender" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {brandNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            variant="standard"
            sx={{ m: 1, }}
            className={classes.selectBox}
          >
            <InputLabel id="demo-multiple-checkbox-label">DISCOUNT</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Gender" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {discount.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <hr />

        

          <FormControl
            variant="standard"
            sx={{ m: 1, }}
            className={classes.selectBox}
          >
            <InputLabel id="demo-multiple-checkbox-label">CUSTOMER RATINGS</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Gender" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {customerRating.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box className={classes.grid} style={{ marginTop: "50px" }}>
          <Box
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              fontWeight:"600",
              color:"grey",
              cursor:"pointer"
            }}
          >
            <span>Sort by</span>
            <div>Popularity</div>
            <div onClick={priceLTH}>Price--Low to High</div>
            <div onClick={priceHTL}>Price--High to Low</div>
            <div>Newest First</div>
          </Box>
          <hr />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs:3, sm: 3, md: 3}}
            style={{ gap: "10px" }}
          >
            {data?.map((item) => (
              <>
               <Link to={`/products/${item.id}`} style={{textDecoration:"none"}}>

                <Box  textAlign="left" className={classes.wrapper}>
                  <img src={item.url} alt="" className={classes.image} />
                  <Typography
                    className={classes.text}
                    style={{ fontWeight: 600, color: "#212121" }}
                  >
                    {item.title.shortTitle}
                  </Typography >
                  <span style={{color:"black"}}>
                    ₹<strong>{item.price.cost}</strong>
                  </span>
                  &nbsp;&nbsp;
                  <span style={{ textDecoration: "line-through",color:"black" }}>
                    ₹{item.price.mrp}
                  </span>
                  &nbsp;&nbsp;
                  <span style={{ color: "green" }}>
                    {item.price.discount}off
                  </span>
                  <Typography
                    className={classes.text}
                    style={{ color: "green" }}
                  >
                    {item.discount}
                  </Typography>
                  <Typography
                    className={classes.text}
                    style={{ opacity: "0.6", color: "#212121" }}
                  >
                    {item.tagline}
                  </Typography>
                </Box>
              </Link>
                
              </>
            ))}
          </Grid>
          <hr />
        <Stack spacing={3}>
      <Pagination style={{marginLeft:"20%"}} page={page} onChange={handlePage}  count={10} color="primary" />
      
    </Stack>
        </Box>
      </Box>
    </>
  );
}
