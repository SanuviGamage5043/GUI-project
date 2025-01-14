import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, removeFromCart, deleteFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <p>
        {item.name} - ${item.price.toFixed(2)} x {item.quantity} = $
        {(item.price * item.quantity).toFixed(2)}
      </p>
      <div className={styles.actions}>
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <button onClick={() => deleteFromCart(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;