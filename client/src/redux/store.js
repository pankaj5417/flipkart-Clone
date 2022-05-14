import { createStore } from "redux";
import { compose } from "redux";
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { productReducer } from "./product/productReducer";

const rootReducer=combineReducers({
    products:productReducer,
    cart:cartReducer
})

export const store=createStore(rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__())
    )