import React, { useEffect } from "react";
import CartItem from "./cart-item";

function Cart(props) {
  const [total, setTotal] = React.useState(0);

  return (
    <div className="cart-wrapper">
      <div className="cart-sidebar">
        <h1>Your shopping cart</h1>
        <div className="cart-items">
          {props.cartSize === 0
            ? null
            : Object.keys(props.cart).map((item) => {
                return (
                  <CartItem
                    item={props.cart[item]}
                    addToCart={() => props.addToCart(item)}
                    removeFromCart={() => props.removeFromCart(item)}
                  />
                );
              })}
        </div>
        <p>total</p>
        <button>checkout</button>
        <button onClick={props.switchCartDisplay}>close</button>
      </div>
    </div>
  );
}

export default Cart;
