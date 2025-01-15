import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./pages/home1/home1";
import Home2 from "./pages/Home2/Home2";
import SignUp from "./pages/SignUp/SignUp";
import Bakery from "./pages/Bakery/Bakery"
import Choco from "./pages/Choco/Choco";
import Flowers from "./pages/Flowers/Flowers";
import Fruits from "./pages/Fruits/Fruits";
import GiftBox from "./pages/GiftBox/GiftBox";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Cart from "./pages/Cart/Cart";



export default function App() {
  // Cart state will hold the list of products in the cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log(cart)
  };

  // Function to remove an item from the cart by its id
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Get the number of items in the cart
  const getCartCount = () => {
    return cart.length;
  };
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/bakery" element = {<Bakery addToCart={addToCart} cart={cart}/>}/>
        <Route path="/cart" element = {<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} getCartCount={getCartCount}/>}/>
        <Route path="/choco" element = {<Choco addToCart={addToCart} cart={cart}/>}/>
        <Route path="/flowers" element = {<Flowers addToCart={addToCart} cart={cart}/>}/>
        <Route path="/fruits" element = {<Fruits addToCart={addToCart} cart={cart}/>}/>
        <Route path="/giftbox" element = {<GiftBox addToCart={addToCart} cart={cart}/>}/>
        <Route path="/home" element = {<Home addToCart={addToCart} cart={cart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}