import React, { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { decrementSuccess, incrementSuccess } from "../../redux/cart/cartActionCreator";
import { useDispatch, useSelector } from "react-redux";


const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button :{
        borderRadius: '50%'
    }
})

const GroupButton = (item) => {
    const dispatch=useDispatch()
  const {data}=useSelector(state=>({
    // loading:state.cart.loading,
    // err:state.cart.err,
    data:state.cart.cartData
  }))
    const classes = useStyle();
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = (item) => {
        setCounter(counter => counter + 1 );
       dispatch( incrementSuccess(item))

    };

    const handleDecrement = (item) => {
        setCounter(counter => counter - 1 );
        dispatch(decrementSuccess(item))
    };

    return (
        <ButtonGroup className={classes.component} >
            <Button className={classes.button} onClick={() => handleDecrement(item)} disabled={counter === 0}>-</Button>
            <Button disabled>{counter}</Button>
            <Button className={classes.button} onClick={() => handleIncrement(item)}>+</Button>
        </ButtonGroup>
    );
}

export default GroupButton;