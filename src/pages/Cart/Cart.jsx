import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css';


const Cart = ({cart, addToCart, getCartCount, addToOrders}) => {

const navigate = useNavigate();

const handleBuyNow = () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  addToOrders(); // Move cart items to orders
  alert("Your purchase was successful!");
  navigate("/orders"); // Redirect to Orders page
};

  const [cartItems, setCartItems] = useState(cart);

  // Function to handle quantity change
  const handleQuantityChange = (id, type) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (type === "increase") {
          item.quantity = item.quantity + 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity = item.quantity - 1;
        }
      }
      return item;
    });
    setCartItems(updatedCart);
  };
   // Function to remove item from cart
   const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const Back = () => {
    navigate("/home2");
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      
      {/* Product List */}
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image_url} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3 className="item-title">{item.name}</h3>
                <p className="item-price">Rs.{item.price}</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => handleQuantityChange(item.id, "decrease")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, "increase")}>+</button>
              </div>
              <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                <img src="images\trash-bin.png" className="trashbin"/>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="para">Your cart is empty.</p>
      )}

      {/* Total and Action Buttons */}
      <div className="cart-actions">
        <div className="total-amount">
          <p>Total: Rs.{calculateTotal()}</p>
        </div>
        <button className="back-button" onClick={Back} >Back</button>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
