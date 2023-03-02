import React, { useContext } from "react";

import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCounter } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p> ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          {/* params: e.target.value to get newAmount // input is a string => convert to Number */}
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCounter(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
