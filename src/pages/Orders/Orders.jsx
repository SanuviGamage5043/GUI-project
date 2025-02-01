import React from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <div className="orderscontent">
      <h1 className="orderheading">My Orders</h1>
      <h2 className="paraheading">Purchased Items</h2>
      <div className="order-items">
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image_url} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3 className="item-title">{item.name}</h3>
                <p className="item-price">Rs.{item.price} (x{item.quantity})</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items purchased.</p>
        )}
      </div>
      <button onClick={() => navigate("/home2")} className="back-button">Back</button>
    </div>
  );
};

export default Orders;
