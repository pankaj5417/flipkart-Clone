import React, { useEffect, useState } from "react";
import { alpha, InputBase, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getFilteredData,
  getProductData,
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
    position: "fixed",
    width: "100%",

    borderRadius: "2px",
    minWidth: "400px",
    top: 16,
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
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  //const [dataItem, setDataItem] = useState([data]);

  const handleChange = (event) => {
    let searchString = event.target.value;
    console.log(searchString);
    // const filteredData=dataItem.filter(prod=>{
    // return data.title.shortTitle.toLocaleLowerCase().incudes(searchString)

    //})
    dispatch(getFilteredData(searchString))
    //console.log("filteredData",filteredData)
    /// setDataItem(filteredData)
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
            // onChange={handleChange}
            onChange={(e) => getText(e.target.value)}
          />
          <div className={classes.searchIcon}>
            <Search />
          </div>
        </div>
        <div className={classes.searchList}>
          <hr />

          {text && (
            <>
              <List className={classes.list} hidden={open}>
                {data
                  .filter((product) =>
                    product.id.toLowerCase().includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem className={classes.listItem}>
                      <Link
                        to={`/products/${product.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={() => setOpen(true)}
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))}
              </List>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
