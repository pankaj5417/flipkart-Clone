import React, { useEffect, useState } from "react";
import { alpha, InputBase, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getFilteredData,
  getProductData,
  getProductSuccess,
} from "../../redux/product/productActionCreator";
import { Link } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  searchContainer: {
    position: "absolute",
    minWidth: "400px",
    left: "22%",
    top: 15,
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#fff",
    webkitBoxShadow: "0px 0px 18px -3px rgba(0,0,0,0.75)",
    mozBoxShadow: "0px 0px 18px -3px rgba(0,0,0,0.75)",
    boxShadow: "0px 0px 18px -3px rgba(0,0,0,0.75)"
  },
  search: {
    position: "fixed",
    minWidth: "400px",
    left: "22%",
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
  list: {
    position: "absolute",
    width: "100%",

    borderRadius: "2px",
    minWidth: "400px",
    top: 7,
    color: "#000",
    background: "#FFFFFF",
    zIndex: "999",
  },
  searchList: {
    width: "100%",
    borderRadius: "2px",
    minWidth: "400px",
    top: 14,
    color: "#000",
    background: "#FFFFFF",
    zIndex: "999",
  },
}));

function SearchBar() {
  const dispatch = useDispatch();
  const { loading, err, data } = useSelector((state) => ({
    loading: state.products.isLoading,
    err: state.products.isError,
    data: state.products.productData,
  }));
  console.log("searchdata", data);

  const [text, setText] = useState();
  const [open, setOpen] = useState(false);
  const [searchResult, setSearchResult] = useState();

  
  //const [dataItem, setDataItem] = useState([data]);

  const handleChange = async (event) => {
   setOpen(false)
    let searchString = event.target.value.toLocaleLowerCase();
    console.log(searchString, data);
    try {
      const res = await axios.get(
        "https://flipkart-clone3.herokuapp.com/db/products"
      );
      console.log(res.data);
      setSearchResult(
        res.data.filter((d) =>
          d.title.shortTitle.toLocaleLowerCase().includes(searchString)
        )
      );
    } catch (error) {
      console.log(error);
    }
    console.log("searchRes", searchResult);
  };

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const classes = useStyle();
  return (
    <>
      <div className={classes.searchContainer}>
        <div className={classes.search}>
          <InputBase
            placeholder="Searc for products, brands and more"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            // onChange={(e) => getText(e.target.value)}
          />
          <div className={classes.searchIcon}>
            <Search />
          </div>
         
        </div>
        <hr />
        <div className={classes.searchList}>
          {searchResult && (
            <>
              <List className={classes.list} hidden={open}>
                <hr />
                {
                  // data
                  //   .filter((product) =>
                  //     product.id.toLowerCase().includes(text.toLowerCase())
                  //   )

                  searchResult.map((product) => (
                    <>
                      <ListItem>
                        <Link
                          to={`/products/${product.id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                          onClick={() => setOpen(true)}
                        >
                          {product.title.shortTitle}
                        </Link>
                      </ListItem>
                    </>
                  ))
                }
              </List>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
