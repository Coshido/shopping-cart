function Cart(props) {
  const [total, setTotal] = React.useState(0);

  return (
    <div className="cart-wrapper">
      <div>
        <h1>Your shopping cart</h1>
        {props.cart.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
