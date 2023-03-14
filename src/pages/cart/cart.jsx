import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartPrice } = useContext(ShopContext);
  const totalPrice = getTotalCartPrice();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalPrice > 0 ? (
        <div className="checkout">
          <p> Total: {totalPrice}$</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="checkout">
          <h1>Your cart is empty</h1>
          <button onClick={() => navigate("/")}>Go Shopping !</button>
        </div>
      )}
    </div>
  );
};
