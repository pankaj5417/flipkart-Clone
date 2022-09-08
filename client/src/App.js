import logo from './logo.svg';
import './App.css';
import Header from './components/headers/Header';
import Home from './components/Home/Home';
import {Routes,Route} from "react-router-dom"
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import ProductDetail from './components/products/ProductDetail';
import { OrderSuccess } from './components/orderSuccess/OrderSuccess';

function App() {
  return (
    <>
     <Header />
      <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/products" element={<Products />}></Route>
     <Route path="/products/:id" element={<ProductDetail />}></Route>


    
     <Route path="/cart" element={<Cart />}></Route>
     <Route path="/cart/checkout" element={<OrderSuccess />}></Route>


      </Routes>
   
    </>
  );
}

export default App;
