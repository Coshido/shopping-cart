import React, { useEffect } from "react";
import CartItem from "./cart-item";

function Cart(props) {
  const [total, setTotal] = React.useState(0);
  const [cartSize, setCartSize] = React.useState(0);

  useEffect(() => {
    setCartSize(Object.keys(props.cart).length);
  }, [props.cart]);

  return (
    <div className="cart-wrapper">
      <div className="cart-sidebar">
        <h1>Your shopping cart</h1>
        <div className="cart-items">
          {cartSize === 0
            ? null
            : Object.keys(props.cart).map((item) => {
                return <CartItem item={props.cart[item]} />;
              })}
        </div>
        <p>total</p>
        <button>checkout</button>
        <button>close</button>
      </div>
    </div>
  );
}

export default Cart;
