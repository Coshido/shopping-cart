function CartItem(props) {
  return (
    <div className="cart-item">
      <img src={props.item.img} className="cart-image" />
      <h3>{props.item.name}</h3>
      <p>{props.item.price}€</p>
      <div className="cart-quantity">
        <button onClick={props.removeFromCart}>-</button>
        <p>{props.item.count}</p>
        <button onClick={props.addToCart}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
