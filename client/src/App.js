import logo from './logo.svg';
import './App.css';
import Header from './components/headers/Header';
import Home from './components/Home/Home';
import {Routes,Route} from "react-router-dom"
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
     <Header />
      <Routes>
     <Route path="/" element={<Home />}></Route>
    
     <Route path="/cart" element={<Cart />}></Route>

      </Routes>
   
    </>
  );
}

export default App;
